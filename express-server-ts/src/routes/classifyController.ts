const mongoose = require('mongoose');
// MongoDB URL from the docker-compose file and gridfs path
const dbHost = 'mongodb://database/mean-docker/simpleImageStore';
mongoose.createConnection(dbHost);
const classImgModel = require('./db_models/classifiedImageModel.js')
const ImageDb = classImgModel.imageDbModel();
const classifier = require('./image_classifier/classify_image.js')
const multer = require('multer');

// multer settings for single upload
// TODO set max upload size
const upload = multer({ 
    dest : './tempUploads'
}).single('file');


/** API routes for classifying **/

export class ClassifyController {
  // TODO move all document logic to module
  classifyImage ( req, res) {
    upload(req, res, (uploadError) => {
      if(uploadError){
        return handleClassifyError( res, { error_code:1, err_desc:uploadError } );
      }

      // newImage = createImageDocWithMetaData( req );

      classifier.saveAndClassifyImage( req, ( result ) => {
        if ( result.err_code != 0 ) return handleClassifyError( res, result );

        // else send success result
        res.status(200).json( result );

      });

    });
  }
  getListOfAllClassifiedImages (req, res) {
    // return all documents without image data
    ImageDb.find({}, { img: 0 }, {sort: '-date_uploaded'}, (err, classifiedImages) => {
      if (err) res.status(500).send(error);

      res.status(200).json(classifiedImages);
    });
  }
  // TODO get single classified image document by name
  getClassifiedImageData (req, res) {
    const imageName = req.params.imageName;
    ImageDb.findOne({ 'image_name': imageName }, (err, classifiedImage) => {
      // handle request error
      if (err) {
        console.log( 'Error with getClassifiedImageData request' );
        res.status(500).send(error);
      }

      // check if query return a result
      if (classifiedImage) {
        // TODO remove extra if by validating data exists before saving document
        if (classifiedImage.img.data) {
          res.set( 'Content-Type', classifiedImage.img.content_type );
          res.send( classifiedImage.img.data );
        } else {
          res.status(500).send('No image data!');
        }
        
      } else {
        // handle no result from query
        console.log( 'Image not found: ' +  imageName );
        res.status(500).send( 'Image not found' );
      }

    });
  }
}

/*

Error codes:
- 0: no error
- 1: upload error
- 2: file read error
- 3: mongo save error
- 4: tensorflow error
- 5: save prediction error

*/
function handleClassifyError ( res, classifyResponse ) {
  switch( classifyResponse.error_code ) {
    case 1:
      console.log('Upload error: ' + classifyResponse.err_desc);
      return res.status(500).json( classifyResponse );
    case 2:
      console.log('file read error: ' + classifyResponse.err_desc);
      return res.status(500).json(classifyResponse);
    case 3:
      console.log('mongo save error: ' + classifyResponse.err_desc);
      return res.status(500).json(classifyResponse);
    case 4:
      console.log('tensorflow error: ' + classifyResponse.err_desc);
      return res.status(500).json(classifyResponse);
    case 5:
      console.log('save prediction error: ' + classifyResponse.err_desc);
      return res.status(500).json(classifyResponse);
    default:
      console.log('Unknown error code: ' + classifyResponse.err_desc);
      return res.status(500).json(classifyResponse.err_desc);
  }
}

console.log( '-- clasify API loaded --' );
