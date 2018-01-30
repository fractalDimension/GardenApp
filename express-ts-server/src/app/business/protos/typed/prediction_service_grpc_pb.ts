// package: tensorflow.serving
// file: prediction_service.proto

import * as grpc from "grpc";
import * as prediction_service_pb from "./prediction_service_pb";
import * as predict_pb from "./predict_pb";

export interface IPredictionServiceService extends grpc.IMethodsMap {
    predict: IPredict;
}

interface IPredict {
    path: string; // "/tensorflow.serving.PredictionService/Predict"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestType: predict_pb.PredictRequest,
    responseType: predict_pb.PredictResponse,
    requestSerialize: (arg: predict_pb.PredictRequest) => Buffer;
    requestDeserialize: (buffer: Uint8Array) => predict_pb.PredictRequest;
    responseSerialize: (arg: predict_pb.PredictResponse) => Buffer;
    responseDeserialize: (buffer: Uint8Array) => predict_pb.PredictResponse;
}

// export const PredictionServiceService: IPredictionServiceService;
export class PredictionServiceClient extends grpc.Client {
    // constructor(address: string, credentials: any, options?: grpc.IClientOptions);
    constructor(address: string, options?: grpc.IClientOptions) {};
    predict(request: predict_pb.PredictRequest, callback: (error: Error | null, response: predict_pb.PredictResponse) => void): grpc.ClientUnaryCall;
}
