// package: tensorflow
// file: resource_handle.proto

import * as jspb from "google-protobuf";

export class ResourceHandle extends jspb.Message { 
    getDevice(): string;
    setDevice(value: string): void;

    getContainer(): string;
    setContainer(value: string): void;

    getName(): string;
    setName(value: string): void;

    getHashCode(): number;
    setHashCode(value: number): void;

    getMaybeTypeName(): string;
    setMaybeTypeName(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResourceHandle.AsObject;
    static toObject(includeInstance: boolean, msg: ResourceHandle): ResourceHandle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResourceHandle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResourceHandle;
    static deserializeBinaryFromReader(message: ResourceHandle, reader: jspb.BinaryReader): ResourceHandle;
}

export namespace ResourceHandle {
    export type AsObject = {
        device: string,
        container: string,
        name: string,
        hashCode: number,
        maybeTypeName: string,
    }
}
