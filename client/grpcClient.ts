
import { BehaviorSubject, Observable } from 'rxjs';

export enum ConnectionStatus {
  UNINITIALIZED = 0,
  PENDING_CONNECTION = 1,
  CONNECTED = 2,
  DISCONNECTED = 3,
  FATAL = 4,
  UNKNOWN = 5,
}

export interface ClientState {
  status: ConnectionStatus;
  meta: { [key: string]: string | number | boolean };
  // reconnectAttempts: number;
  error: Error | null;
}

export type GRPCClientStreams = { [key: string]: BehaviorSubject<any> | Observable<any> };

export type GRPCClientCalls = { [key: string]: (...args: any[]) => Promise<void | any> };

export interface GRPCClient {

  /**
     * gRPC Client Connected State
     */
  connectedState: BehaviorSubject<ClientState>;

  /**
     * Observables of gRPC Streams
     */
  streams: GRPCClientStreams;

  /**
     * Custom Wrapper/Handlers for gRPC Calls
     */
  calls: GRPCClientCalls;

  /**
     * After Connected Lifecycle Hook
     */
  init: () => Promise<void>;

}

export const CLIENT_STATE_DEFAULTS: ClientState = {
  status: ConnectionStatus.UNINITIALIZED,
  meta: {},
  // reconnectAttempts: 0,
  error: null,
};

export class ClientStateSnapshot implements ClientState {
  public status: ConnectionStatus;

  public meta: { [key: string]: string | number | boolean };

  public error: Error | null;

  static create(initialState: Partial<ClientState> = {}): ClientStateSnapshot {
    return new ClientStateSnapshot(initialState);
  }

  constructor(state: Partial<ClientState>) {
    const { status, meta, error } = { ...CLIENT_STATE_DEFAULTS, ...state };

    this.status = status;
    this.meta = meta;
    this.error = error;
  }
}
