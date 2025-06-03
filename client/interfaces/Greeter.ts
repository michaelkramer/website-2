/* eslint-disable */
// @ts-nocheck
import { Observable } from "rxjs";

/** The request message containing the user's name. */
export interface HelloRequest {
  name: string | undefined;
}

/** The response message containing the greetings */
export interface HelloReply {
  message: string | undefined;
}

/** The greeter service definition. */
export interface Greeter {
  /** Sends a greeting */
  SayHello(request: HelloRequest): Promise<HelloReply>;
  /** Conversation */
  Conversation(request: HelloRequest): Observable<HelloReply>;
}
