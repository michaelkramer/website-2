/* eslint-disable */
// @ts-nocheck
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { PackageDefinition } from '@grpc/proto-loader';
import _ from 'lodash';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

import { Logger } from '../lib/logger';
import {
  GrpcServiceClient, GRPCServiceContructor, GRPCStreamEvent, isProtoServiceKey,
} from './grpc.common';
import { ClientStateSnapshot, ConnectionStatus, GRPCClient, GRPCClientCalls, GRPCClientStreams } from './grpcClient';

import path from 'path';

export const BASE_PROTO_PATH = path.join(__dirname, '/Protos');

/**
 * Base grpc client
 * @template S GRPCServiceContructor Interface of Service RPCs
 */
export abstract class BaseGrpcClient<S> implements GRPCClient {
  public serviceName: string;

  public connectedState = new BehaviorSubject(ClientStateSnapshot.create());

  public streams: GRPCClientStreams = {};

  public calls: GRPCClientCalls = {};

  protected _calls: GRPCClientCalls = {};

  protected client: GrpcServiceClient | null = null;

  protected _streams: { [key: string]: BehaviorSubject<any> } = {};

  private packageName: string;

  private streamEvents: ReplaySubject<GRPCStreamEvent> = new ReplaySubject<GRPCStreamEvent>();

  private protoLoaded: BehaviorSubject<boolean | Error> = new BehaviorSubject<boolean | Error>(false);

  private protoPath: string | null = null;

  private loaderOptions: protoLoader.Options = {};

  private host: string;

  private credentials: grpc.ChannelCredentials;

  private logger: Logger;

  /**
   * Creates an instance of base grpc client.
   * @param packageName Name of protobuf package
   * @param serviceName Name of protobuf Service
   * @param [protoPath]  (default: auto-detect)
   * @param [host] gRPC Server Host (default=)
   * @param [loaderOptions] Loader Configuration Options
   * @param [credentials] gRPC Client Credentials (default: grpc.credentials.createInsecure())
   */
  constructor(
    logger: Logger,
    packageName: string,
    serviceName: string,
    protoPath: string | null = null,
    host: string,
    loaderOptions: protoLoader.Options = {},
  ) {
    this.logger = logger;
    this.packageName = packageName;
    this.serviceName = serviceName;
    this.protoPath = protoPath;
    this.host = host;
    this.loaderOptions = BaseGrpcClient.normalizeLoaderOptions(loaderOptions);
    this.credentials = grpc.credentials.createInsecure();
  }

  /**
   * Init
   * @abstract
   * @description Async Lifecycle Readiness Hook (ex: bind handlers to rpc calls & streams)
   * @returns Promise
   */
  abstract init(): Promise<void>;

  /**
   *
   * @returns the previous value of serviceHealth
   */
  public async isHealthy(): Promise<boolean> {
    if (this.connectedState.value.status !== ConnectionStatus.CONNECTED) {
      this.logger.debug(`${this.serviceName} ${this.packageName} attempting to reinit...`);
      await this.init();
    }

    return this.connectedState.value.status === ConnectionStatus.CONNECTED;
  }

  /**
   * Binds All Calls as Async Methods in _calls
   */
  protected bindAllCallsAsAsync(): void {
    const methods = Object.keys(this.calls);
    // eslint-disable-next-line no-restricted-syntax
    for (const key of methods) {
      this.bindCallAsAsync(key);
    }
  }

  /**
   * Convert Call to Promisified Async Method
   * @param callName
   */
  protected bindCallAsAsync(callName: string): void {
    // eslint-disable-next-line consistent-return
    this._calls[callName] = ((args: any) => new Promise((resolve, reject) => {
      if (!this.client) {
        return reject(new Error('Client not initialized'));
      }
      this.client[callName](args, (err: Error, resp: any) => {
        if (err) {
          return reject(err);
        }

        return resolve(resp);
      });
    }));
  }

  /**
   * Adds gRPC Readable Stream Events to Multicast Observables
   * @template U Expected Data Type from Stream
   * @param streamName Name of Protobuf Service Method
   * @param [throttleRate] (Optional) Rate Limit Duration (null = no throttle applied)
   * @param args (optional) arguments to pass to rpc stream method
   */
  protected bindStream<U>(streamName: string, initialVal: U, ...args: any[]): void {
    if (!this.client) {
      throw new Error('Unable to add stream - client not initialized.');
      // } else if (["PollVehicleStatus", "PollVehicleCharge", "PollVehicleDetail"].includes(streamName)) {
      //   //because we want vehicle poll to just work
      // } else if (!this.shouldStream) {
      //   return;
    }

    if (!(streamName in this.streams)) {
      this.streams[streamName] = new BehaviorSubject<U>(initialVal);
    }

    const stream: grpc.ClientReadableStream<U> = this.client[streamName](...args);
    const streamObs = this.streams[streamName] as BehaviorSubject<U>;

    // Multicast Update
    stream.on('data', (data: U) => {
      streamObs.next(data);
    });

    stream.on('end', () => {
      this.logger.info(`onEnd: ${streamName}`);
      this.streamEvents.next({
        streamName,
        eventType: 'end',
        error: null,
        status: null,
      });

      this.connectedState.next(new ClientStateSnapshot({ status: ConnectionStatus.DISCONNECTED }));
    });

    stream.on('error', (e: grpc.ServiceError) => {
      this.logger.error('%s: %o', streamName, e);
      this.streamEvents.next({
        streamName,
        eventType: 'error',
        error: e,
        status: null,
      });

      this.connectedState.next(new ClientStateSnapshot({ status: ConnectionStatus.FATAL, error: e }));
    });

    stream.on('status', (status: grpc.status) => {
      this.streamEvents.next({
        streamName,
        eventType: 'status',
        error: null,
        status,
      });
    });
  }

  /**
   * Loads ProtoBuf
   * @description Inits gRPC Client from .proto file
   */
  protected async loadProto(): Promise<void> {
    const {
      packageName, serviceName, protoPath, host, loaderOptions, credentials,
    } = this;

    // Attempt to load gRPC protobuf, but fail fast on any error
    try {
      const resolvedProtoPath = path.resolve((protoPath) || path.join(__dirname, '/Protos', `/${packageName}.proto`));
      this.logger.verbose(`Loading proto ${packageName} ${serviceName} from path ${protoPath}`);


      // Load Protobuf Type Definition
      const pkDef: protoLoader.PackageDefinition = protoLoader.loadSync(resolvedProtoPath, loaderOptions);

      const allProtoTypeDef = grpc.loadPackageDefinition(pkDef as PackageDefinition);

      const protoTypeDef = _.get(allProtoTypeDef, packageName);

      // Initialize Client
      if (isProtoServiceKey(serviceName, protoTypeDef)) {
        const SvcCtor: GRPCServiceContructor<S> = protoTypeDef[serviceName] as GRPCServiceContructor<S>;

        this.client = new SvcCtor(host, credentials);
        if (this.client) {
          // Wait for Connection (5 Sec Limit)
          this.logger.verbose('Created gRPC client... waiting for ready');

          this.client.waitForReady(new Date((new Date().getTime()) + 5000), error => {
            if (error) {
              this.logger.error('Failed to connect %s... %s', serviceName, error.message);
              if ((serviceName as string).includes('StateMarshall')) {
                this.logger.error('The SurePath State Marshall Service is not active.  Please update the SurePath.xml');
              }
              this.connectedState.next(new ClientStateSnapshot({ status: ConnectionStatus.FATAL, error }));
              this.protoLoaded.next(false);
            } else {
              this.logger.info(`Proto ${packageName} ${serviceName} connected!`);
              this.connectedState.next(new ClientStateSnapshot({ status: ConnectionStatus.CONNECTED }));
              this.protoLoaded.next(true);
            }
          });
        }
      } else {
        throw new Error('Service name not found in Protobuf Type Definition');
      }
    } catch (error: any) {
      // Emit Proto Load Error
      this.protoLoaded.next(new Error(`Unable to initialize client - ${error}`));
    }
  }

  /**
   * When ProtoBuf Loaded
   * @returns Promise
   */
  protected whenProtoLoaded(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.protoLoaded.subscribe(ready => {
        if (ready === true) {
          resolve(ready);
        } else if (ready instanceof Error) {
          reject(ready);
        }
      });
    });
  }

  /**
   * Normalizes ProtoBuf Loader Options
   * @param options
   * @returns loader options
   */
  private static normalizeLoaderOptions(options: protoLoader.Options): protoLoader.Options {
    return {
      ...{
        keepCase: true, longs: String, enums: String, defaults: true, oneofs: true,
      },
      includeDirs: [`${__dirname}/Protos`],
      ...options,
    };
  }

  /**
   * Trigger the gRPC Client to reset
   * @description Set the connectionStatus to Disconnected then call isHealty() actions.
   */
  public async reset(): Promise<boolean> {
    this.connectedState.next(new ClientStateSnapshot({ status: ConnectionStatus.DISCONNECTED }));
    return this.isHealthy();
  }

  public async shutdown(): Promise<void> {
    await this.client?.close();
  }
}
