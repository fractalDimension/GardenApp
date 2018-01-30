// lots of help from the following example
// https://github.com/Jflima92/tensorflow-serving-node-typescript-client

import * as path from 'path';
import grpc = require('grpc');
// const grpc: any = require('grpc');

import {
  IPredictionServiceService, PredictionServiceClient
} from './protos/typed/prediction_service_grpc_pb';

import { PredictRequest, PredictResponse } from './protos/typed/predict_pb';

const protoPath = '/usr/src/express-ts-app/src/app/business/protos/prediction_service.proto'; // absolute path inside docker container?

export default class PredictClient {
  private tensorflowServing: any = grpc.load(protoPath).tensorflow.serving;
  private connection: string;
  private client: any;

  constructor (connection: string) {
    console.log('PredictClient constructor');
    this.connection = connection;
    this.Initialize();
  }

  /**
   * Initializes the gRPC client
   * @returns void
   */
  private Initialize(): void {
    this.client = new this.tensorflowServing.PredictionService(
      this.connection, grpc.credentials.createInsecure()
    );
  }

  public predict (buffer: any, callback: any) {

    let buffers;
    if (buffer.constructor === Array) {
      buffers = buffer;
    } else {
      buffers = [buffer];
    }

    const msg = {
      model_spec: { name: 'inception', signature_name: 'predict_images' },
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
    console.log('msg:');
    console.log(msg);

    this.client.predict( msg, (error: any, response: PredictResponse) => {
        if (error) {
          console.error(error);
          return callback( error, response);
        } else {
          console.log('result: ', response.getOutputsMap() );
        }
      }
    );
  }
}
