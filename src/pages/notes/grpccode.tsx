import { ConvertSyntax } from "../../components/common/convertSyntax";

const PRE_PATH = "/website-2";

export default function Component() {
  return (
    <div>
      <h2 className="text-3xl font-bold my-4">gRpc Code</h2>
      <div className="mb-4">
        So, you have a gRpc service that you need to connect to. Now this code
        is copied from a client project so parts might be missing. But it should
        get you started.
      </div>
      <div className="mb-4">
        What is gRpc?{" "}
        <a
          className="link"
          href="https://grpc.io/docs/what-is-grpc/introduction/"
          target="_blank"
        >
          https://grpc.io/docs/what-is-grpc/introduction/
        </a>
      </div>
      <div className="mb-4">
        You will need to make a gRpc Client. You can work with is just like a
        socket.io or rest, but that involves a lot of coding. We created a{" "}
        <strong>class</strong> which injests the gRpc Protobuf and exposes the
        services.
      </div>
      <div className="mb-4 text-2xl font-bold">
        Base class:{" "}
        <a
          className="link"
          href={`${PRE_PATH}/baseGrpcClient.ts`}
          target="_blank"
        >
          baseGrpcClient.ts
        </a>
      </div>
      <div className="rounded-sm bg-base-300 border border-slate-300 p-2 mb-4 h-50 shadow-md overflow-y-auto">
        <ConvertSyntax url={`${PRE_PATH}/baseGrpcClient.ts`} slim />
      </div>
      <div className="mb-4 text-2xl font-bold">
        Interfaces and common functions:{" "}
        <a className="link" href={`${PRE_PATH}/grpcClient.ts`} target="_blank">
          grpcClient.ts
        </a>
      </div>
      <div className="rounded-sm bg-base-300 border border-slate-300 p-2 mb-4 h-50 shadow-md overflow-y-auto">
        <ConvertSyntax url={`${PRE_PATH}/grpcClient.ts`} slim />
      </div>

      <div className="mb-4 text-2xl font-bold">Example:</div>
      <div className="mb-4">
        Protobuff - This has 2 endpoints
        <ul className="pl-4">
          <li>
            <strong>SayHello</strong>: similar to a rest endpoint.
          </li>
          <li>
            <strong>Conversation</strong>: similar to a socket.io endpoint.
          </li>
        </ul>
      </div>
      <div className="rounded-sm bg-base-300 border border-slate-300 p-2 mb-4 h-50 shadow-md overflow-y-auto">
        {/* <ConvertSyntax
          url={`/protos/Greeter.proto`}
          language={"protobuf"}
          slim
        /> */}
      </div>
      <div className="mb-4">
        I used typescript so, I like to convert the proto to interface to get
        the intelliSense to work. There is a package to convert this,{" "}
        <a
          className="link"
          href="https://github.com/stephenh/ts-proto"
          target="_blank"
        >
          ts-proto
        </a>{" "}
        and{" "}
        <a
          className="link"
          href="https://github.com/improbable-eng/ts-protoc-gen"
          target="_blank"
        >
          ts-protoc-gen
        </a>
        . This bash script used to convert protobufs.
      </div>
      <div className="rounded-sm bg-base-300 border border-slate-300 p-2 mb-4 h-50 shadow-md overflow-y-auto">
        <ConvertSyntax
          url={`${PRE_PATH}/convertProto.sh`}
          language={"bash"}
          slim
        />
      </div>
      <div className="mb-4 text-2xl font-bold">The results: </div>
      <div className="rounded-sm bg-base-300 border border-slate-300 p-2 mb-4 h-50 shadow-md overflow-y-auto">
        <ConvertSyntax url={`${PRE_PATH}/interfaces/Greeter.ts`} slim />
      </div>

      <div className="mb-4 text-2xl font-bold">
        Now how to use the baseGrpcClient Class.
      </div>
      <div className="rounded-sm bg-base-300 border border-slate-300 p-2 mb-4 h-50 shadow-md overflow-y-auto">
        <ConvertSyntax url={`${PRE_PATH}/GreeterClient.ts`} slim />
      </div>
    </div>
  );
}
