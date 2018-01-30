// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var predict_pb = require('./predict_pb.js');

function serialize_tensorflow_serving_PredictRequest(arg) {
  if (!(arg instanceof predict_pb.PredictRequest)) {
    throw new Error('Expected argument of type tensorflow.serving.PredictRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_PredictRequest(buffer_arg) {
  return predict_pb.PredictRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tensorflow_serving_PredictResponse(arg) {
  if (!(arg instanceof predict_pb.PredictResponse)) {
    throw new Error('Expected argument of type tensorflow.serving.PredictResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_tensorflow_serving_PredictResponse(buffer_arg) {
  return predict_pb.PredictResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// PredictionService provides access to machine-learned models loaded by
// model_servers.
var PredictionServiceService = exports.PredictionServiceService = {
  // Predict -- provides access to loaded TensorFlow model.
  predict: {
    path: '/tensorflow.serving.PredictionService/Predict',
    requestStream: false,
    responseStream: false,
    requestType: predict_pb.PredictRequest,
    responseType: predict_pb.PredictResponse,
    requestSerialize: serialize_tensorflow_serving_PredictRequest,
    requestDeserialize: deserialize_tensorflow_serving_PredictRequest,
    responseSerialize: serialize_tensorflow_serving_PredictResponse,
    responseDeserialize: deserialize_tensorflow_serving_PredictResponse,
  },
};

exports.PredictionServiceClient = grpc.makeGenericClientConstructor(PredictionServiceService);
