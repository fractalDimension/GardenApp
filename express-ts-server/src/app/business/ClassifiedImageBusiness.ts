// <reference path='../../../typings/tsd.d.ts' />

import { Request, Response } from 'express';
import ClassifiedImageRepository = require('./../repository/ClassifiedImageRepository');
import IClassifiedImageBusiness = require('./interfaces/ClassifiedImageBusiness');
import IClassifiedImageModel = require('./../model/interfaces/ClassifiedImageModel');
import ClassifiedImageModel = require('./../model/ClassifiedImageModel');
import IMulterFileModel = require('./../model/interfaces/MulterFileModel');
import date = require('date-and-time');

// import PythonShell = require('python-shell');
// const pathToPython = '/usr/bin/python3';
// const scriptPath = '/usr/src/express-ts-app/src/python';
// const scriptName = 'helloSnek.py';

// const scriptName = 'label_image.py';
// const tempDir = '/tmp/'; // TODO manually manage the dir instead of relying on the system
// import fs = require('fs');

// const grpc = require('grpc');
//const grpcConfig = 'localhost:9000';
const grpcConfig = 'tensorflow-serving:9000';
import PredictClient from './predict-client';
const client = new PredictClient(grpcConfig);

const clientFromNodePackage = require('tensorflow-serving-node-client')(grpcConfig);

class ClassifiedImageBusiness  implements ClassifiedImageBusiness {
  private _classifiedImageRepository: ClassifiedImageRepository;
  // private _servingClient: ServingClient;

  constructor () {
    this._classifiedImageRepository = new ClassifiedImageRepository();
  }

  create (req: Request & {file: IMulterFileModel}, callback: (error: any, result: any) => void) {

    console.log('trying to save the file named: ', req.file.originalname);

    // TODO move this section into a helper function
    const imageToClassify: IClassifiedImageModel = <IClassifiedImageModel>{};
    imageToClassify.image_name = req.file.originalname;
    imageToClassify.date_uploaded = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
    imageToClassify.img = {
      data: req.file.buffer,
      encoding: req.file.encoding,
      content_type: getFileType(req.file.originalname)
    };

    this._classifiedImageRepository.create(imageToClassify, callback);
  }

  // TODO deal with calback hell, async/await?

  classify (res: Response, callback: (error: any, result: any) => void) {
    console.log('I should do something with this id: ', res.locals._id);
    // get document and save image to tmp directory
    this.findById( res.locals._id, function (err: any, results: IClassifiedImageModel) {
      console.log('found doc by id: ', res.locals._id);
      console.log('name?: ', results.image_name);
      // const filePath = tempDir + results.image_name;
      const imageData = results.img.data;
      const imageEncoding = results.img.encoding;

      console.log('using home rolled send grpc');
      client.predict(imageData, (predErr: any, predRes: any) => {
        if (predErr) {
          console.log('error in predict');
          console.log(predErr);
          return callback( predErr, predRes);
          // return console.error(err);
        }
        console.log(predRes);
        return callback( null, predRes);
      });


      // console.log('using node package to send grpc');
      // console.log(imageData);
      /*
      clientFromNodePackage.predict(imageData, (predErr: any, predRes: any) => {
        console.log('prediction error' + predErr);
        if (predErr) {
          return console.error(err);
        }
        console.log(predRes);
      });
      */

      /*
      client.predict( imageData, (predErr: any, predRes: any) => {
        if (predErr) {

          console.log('error in predict');
          console.log(predErr);
          return callback( predErr, predRes);
          // return console.error(predErr);
        }
        console.log(predRes);
        const predResult: any = predRes ? predRes.value : [];

        const percentages = predResult.map((result: any) => Math.ceil(result * 10000) / 100);
        console.log('results: %j', percentages);
        return callback( null, percentages);
      });
      */

      // TODO check if file is already in tmp directory

      /*
      fs.writeFile( filePath, imageData, {encoding: imageEncoding}, function( wfErr ) {
        if ( wfErr ) {
          console.log('error in writing file: ', wfErr);
          // throw err;
        }
        console.log('The file has been saved!');

        // the argument is the tempfile path to the image
        const options = {
          scriptPath: scriptPath,
          pythonPath: pathToPython,
          args: [filePath]
        };

        console.log('running python script');

        
        PythonShell.run( scriptName, options, function (shellErr: any, shellResults: any) {
          if (shellErr) {
            console.log('error in shell');
            console.log(shellErr);
            callback( shellErr, shellResults);
            // throw err;
          } else {
            // results is an array consisting of messages collected during execution
            console.log('results: %j', shellResults);
            callback( null, shellResults);
          }
        });
        
      });
      */
    });




  }

  retrieve (callback: (error: any, result: any) => void) {
    this._classifiedImageRepository.retrieve(callback);
  }

  update (_id: string, item: IClassifiedImageModel, callback: (error: any, result: any) => void) {

    this._classifiedImageRepository.findById(_id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._classifiedImageRepository.update(res._id, item, callback);
      }
    });
  }

  delete (_id: string, callback: ( error: any, result: any) => void) {
    this._classifiedImageRepository.delete(_id , callback);
  }

  findById (_id: string, callback: ( error: any, result: IClassifiedImageModel) => void) {
    this._classifiedImageRepository.findById(_id, callback);
  }

}


Object.seal(ClassifiedImageBusiness);
export = ClassifiedImageBusiness;


function getFileType( fileName: string ) {
  return 'image/' + fileName.split('.').slice(-1)[0];
}

