/* eslint-disable */
// @ts-nocheck
import { Logger } from '../lib/logger';
import { BaseGrpcClient, BASE_PROTO_PATH } from './baseGrpcClient';
import { GRPCClient, GRPCClientStreams, GRPCClientCalls } from './grpcClient';
import { Greeter, HelloReply, HelloRequest } from './interfaces';



export class GreeterClient extends BaseGrpcClient<Greeter> implements GRPCClient {
  public calls: GRPCClientCalls = {
    SayHello: this.sayHello.bind(this),
  };

  public streams: GRPCClientStreams = {};

  constructor(logger: Logger, host: string) {
    super(
      logger,
      'Greeter',
      'Greeter',
      `${BASE_PROTO_PATH}/protos/Greeter.proto`,
      host,
    );
  }

  private sayHello(RequestType: HelloRequest): Promise<any> {
    const request: HelloRequest = {
      RequestType,
    };
    return this._calls.SayHello(request);
  }

  public async init(): Promise<void> {
    this.loadProto();

    await this.whenProtoLoaded();

    const initVal: HelloReply = {
      message: ""
    };

    this.bindStream<HelloReply>('Conversation', initVal);

    this.bindAllCallsAsAsync();
  }
}

/**
 * Exampe of Uses
 */
export const example = () => {
  const greeterClient = new GreeterClient(Logger, "grpc.Server");
  greeterClient.streams.Conversation.subscribe(async (data: HelloReply) => {
    // something here
  });
}
