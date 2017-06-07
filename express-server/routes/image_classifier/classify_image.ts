const mongoose = require('mongoose');
// MongoDB URL from the docker-compose file and gridfs path
const dbHost = 'mongodb://database/mean-docker/simpleImageStore';
const imageRootPath = 'http://localhost:3000/classifiedImages/';
mongoose.createConnection(dbHost);
const classImgModel = require('../db_models/classifiedImageModel.js');
const ImageDb = classImgModel.imageDbModel();
const fs = require('fs');
const date = require('date-and-time');

module.exports = {
  saveAndClassifyImage: ( req, saciCallback ) => {
    newImage = createImageDocWithMetaData( req );

    //store image after reading the file in the async call back
    fs.readFile(req.file.path, ( fsErr, fsData ) => {
      if( fsErr ){
        return saciCallback( {err_code: 2, err_desc: fsErr} );
      }
      
      // save image data to mongo
      console.log( '-- Saving %s to mongo-- ', newImage.image_name );
      newImage.img.data = fsData;

      newImage.save( ( mongoErr, savedImage ) => {
        if ( mongoErr ) return saciCallback( {err_code: 3, err_desc: mongoErr} );

        // classify image
        classifyWithTensorFlow( savedImage, ( cwtsResult )  => {
          if ( cwtsResult.err_code != 0 ) return saciCallback( cwtsResult );

          // simulate long image prediction time
          setTimeout( (function() {
            saciCallback( cwtsResult );
          }), 2000);
        });
      });
    });


  }
}

function classifyWithTensorFlow ( imageDocument, cwtfCallback ) {
  // classify and return prediction

  // dummy prediction
  const prediction = {
    date: Date.now(),
    model_version: '0.2.testing'
  }

  imageDocument.predictions.push(prediction);

  imageDocument.save((preErr, savedDoc) => {
    if (preErr) return cwtfCallback({err_code: 5, err_desc: preErr});

    cwtfCallback( {err_code: 0, message: 'succesfully classified: ' + savedDoc.image_name} );
  });
}

function createImageDocWithMetaData( req ) {
  const newImage = new ImageDb();
  const fileName = req.file.originalname;
  newImage.image_name = uniqueUriSafeName(fileName);
  // TODO filter unwanted content types
  newImage.img.content_type = getFileType(fileName);
  newImage.image_path =  getFilePath(newImage.image_name);
  newImage.date_uploaded = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
  return newImage;
}

function uniqueUriSafeName( fileName ) {
  //only letters and numbers
  return ( fileName + Date.now() ).replace(/[^a-z\d]+/gi, "");
}

function getFileType( fileName ) {
  return 'image/' + fileName.split('.').slice(-1)[0];
}

function getFilePath( imageName ) {
  return imageRootPath + imageName;
}
