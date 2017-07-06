const mongoose = require('mongoose');
// MongoDB URL from the docker-compose file and gridfs path
const dbHost = 'mongodb://database/mean-docker/simpleImageStore';
const imageRootPath = 'http://localhost:3000/classifiedImages/';

import { ImageDb, IClassifiedImageModel } from '../../models/classifiedImage/classifiedImageModel';
import { Request, Response } from 'express';
import { MulterFile } from '../../models/multer/multerFileModel';
const fs = require('fs');
// const date = require('date-and-time');
import * as date from 'date-and-time';

export const saveAndClassifyImage = ( req: Request & {file: MulterFile}, saciCallback: any ) => {
  const newImage = createImageDocWithMetaData( req );

  // store image after reading the file in the async call back
  fs.readFile( req.file.path, ( fsErr: any, fsData: any ) => {
    if ( fsErr ) {
      return saciCallback( {err_code: 2, err_desc: fsErr} );
    }

    // save image data to mongo
    console.log( '-- Saving %s to mongo-- ', newImage.image_name );
    newImage.img.data = fsData;

    newImage.save( ( mongoErr, savedImage ) => {
      if ( mongoErr ) { return saciCallback( {err_code: 3, err_desc: mongoErr} ); }

      // classify image
      classifyWithTensorFlow( savedImage, ( cwtsResult )  => {
        if ( cwtsResult.err_code !== 0 ) { return saciCallback( cwtsResult ); }

        // simulate long image prediction time
        setTimeout( (function() {
          saciCallback( cwtsResult );
        }), 2000);
      });
    });
  });
};


function classifyWithTensorFlow ( imageDocument: IClassifiedImageModel, cwtfCallback ) {
  // classify and return prediction

  // dummy prediction
  const prediction = <any> {
    date: Date.now(),
    model_version: '0.2.testing'
  };

  imageDocument.predictions.push( prediction );

  imageDocument.save((preErr, savedDoc) => {
    if (preErr) { return cwtfCallback({err_code: 5, err_desc: preErr}); }

    cwtfCallback( {err_code: 0, message: 'succesfully classified: ' + savedDoc.image_name} );
  });
}

function createImageDocWithMetaData( req: Request & {file: MulterFile} ) {
  const newImage = new ImageDb();
  const fileName = req.file.originalname;
  newImage.image_name = uniqueUriSafeName(fileName);
  // TODO filter unwanted content types
  newImage.img.content_type = getFileType(fileName);
  newImage.image_path =  getFilePath(newImage.image_name);
  newImage.date_uploaded = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
  return newImage;
}

function uniqueUriSafeName( fileName: string ) {
  // only letters and numbers
  return ( fileName + Date.now() ).replace(/[^a-z\d]+/gi, '');
}

function getFileType( fileName: string ) {
  return 'image/' + fileName.split('.').slice(-1)[0];
}

function getFilePath( imageName: string ) {
  return imageRootPath + imageName;
}
