/**
 * Node gRPC client for TensorFlow Serving server.
 */

import grpc = require('grpc');
declare var __dirname: string;

const PROTO_PATH = __dirname + '/protos/prediction_service.proto';
const protoPath = '/usr/src/express-ts-app/src/app/business/protos/predict.proto';

/**
 * Exports client.
 *
 * @param      {string}  connection  Tensorflow Serving connection string. E.g., localhost:9000
 */
export class ServingClient {
  private proto: any;
  private predictionService: any;
  private client: any;

  constructor (connection: string) {
    // loading service proto
    console.log(protoPath);
    this.proto = grpc.load(protoPath).tensorflow.serving;
    this.predictionService = this.proto.PredictionService;

    // creating gRPC service client
    const predClient = this.predictionService( connection, grpc.credentials.createInsecure() );
  }

  /**
   * Calls predict gRPC method on TensorFlow Serving server.
   *
   * @param      {Buffer|Array<Buffer>}  buffer  JPEG data buffer to classify.
   * @param      {Function}              fn      Callback.
   */
  predict (buffer: any, fn: any) {
    
    let buffers;
    if (buffer.constructor === Array) {
      buffers = buffer;
    } else {
      buffers = [buffer];
    }

    // building PredictRequest proto message
    const msg = {
      model_spec: { name: 'saved_model' },
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


    // calling gRPC method
    this.client.predict(msg, (err, response) => {
      if (err) { return fn(err); }

      // decoding response
      const classes = response.outputs.classes.string_val.map((b) => b.toString('utf8'));

      // splitting results
      let i
      const len = classes.length,
            chunk = 5,
            results = [];
      for (i = 0; i < len; i += chunk) {
        results.push(classes.slice(i, i + chunk));
      }

      fn(null, results)
    });

  }

}
