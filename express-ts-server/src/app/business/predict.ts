"use strict";

// const grpc = require("grpc");

const SERVER_PORT = 9000;
const XOR_CONSTR = `model-server:${SERVER_PORT}`;

// const PROTO_PATH = __dirname + "/protos/prediction_service.proto";
const protoPath = '/usr/src/express-ts-app/src/app/business/protos/predict_service.proto';
const TensorflowServing = grpc.load(protoPath).tensorflow.serving;

/*
    this should actually be split in a
    generic client/predict class
*/

const xorClient = new TensorflowServing.PredictionService(
    XOR_CONSTR, grpc.credentials.createInsecure()
);

function getXORModelMsg(vals) {
    return {
      model_spec: { name: 'inception' },
      inputs: {
        images: {
          dtype: 'DT_STRING',
          tensor_shape: {
            dim: {
              size: buffers.length
            }
          },
          string_val: buffers
        }
      }
    };
}


function predictXOR(buffer, callback) {

  let buffers;
  if (buffer.constructor === Array) {
    buffers = buffer;
  } else {
    buffers = [buffer];
  }

  xorClient.predict(logMsg(getXORModelMsg(buffers)), (error, response) => {

    if (error) {
        return callback(error);
    }

    logOutput(response);
    callback(null, response.outputs.outputs.float_val);
  });
}


function logInput(array = []) {
    console.log(`Input array size: ${array.length}, example value: ${array[0]}.`);
    return array;
}

function logMsg(msg) {
    try {
        console.log(`Tensor Dim: ${JSON.stringify(msg.inputs.inputs.tensor_shape.dim)}.`);
    } catch (error) {
        console.log(error);
    }

    return msg;
}

function logOutput(response) {
    console.log(`Tensor-Response: ${JSON.stringify(response.outputs)}`);
}

module.exports = {
    predictXOR
};

/*
"use strict";

const grpc = require("grpc");

const SERVER_PORT = 9000;
const XOR_CONSTR = `model-server:${SERVER_PORT}`;

// const PROTO_PATH = __dirname + "/protos/prediction_service.proto";
const protoPath = '/usr/src/express-ts-app/src/app/business/protos/predict_service.proto';
const TensorflowServing = grpc.load(protoPath).tensorflow.serving;



const xorClient = new TensorflowServing.PredictionService(
    XOR_CONSTR, grpc.credentials.createInsecure()
);

function getXORModelMsg(vals) {
    return {
      model_spec: { name: 'inception' },
      inputs: {
        images: {
          dtype: 'DT_STRING',
          tensor_shape: {
            dim: {
              size: buffers.length
            }
          },
          string_val: buffers
        }
      }
    };
}


function predictXOR(buffer, callback) {

  let buffers;
  if (buffer.constructor === Array) {
    buffers = buffer;
  } else {
    buffers = [buffer];
  }

  xorClient.predict(logMsg(getXORModelMsg(buffers)), (error, response) => {

    if (error) {
        return callback(error);
    }

    logOutput(response);
    callback(null, response.outputs.outputs.float_val);
  });
}


function logInput(array = []) {
    console.log(`Input array size: ${array.length}, example value: ${array[0]}.`);
    return array;
}

function logMsg(msg) {
    try {
        console.log(`Tensor Dim: ${JSON.stringify(msg.inputs.inputs.tensor_shape.dim)}.`);
    } catch (error) {
        console.log(error);
    }

    return msg;
}

function logOutput(response) {
    console.log(`Tensor-Response: ${JSON.stringify(response.outputs)}`);
}

module.exports = {
    predictXOR
};
*/