// package: tensorflow.serving
// file: model.proto

import * as jspb from "google-protobuf";

export class ModelSpec extends jspb.Message { 
    getName(): string;
    setName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModelSpec.AsObject;
    static toObject(includeInstance: boolean, msg: ModelSpec): ModelSpec.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModelSpec, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModelSpec;
    static deserializeBinaryFromReader(message: ModelSpec, reader: jspb.BinaryReader): ModelSpec;
}

export namespace ModelSpec {
    export type AsObject = {
        name: string,
    }
}
