const mongoose = require('mongoose');
// MongoDB URL from the docker-compose file and gridfs path
const dbHost = 'mongodb://database/mean-docker/simpleImageStore';
mongoose.createConnection(dbHost);
const multer = require('multer');
const fs = require('fs');
const ClassifySchema = mongoose.Schema;

// Create Schema
// TODO make fields required
const imageSchema = new ClassifySchema({
  image_name: String,
  image_path: String,
  img : {
    data: Buffer,
    content_type: String
  }
});

const ImageDb = mongoose.model('ImageDb', imageSchema);

//multer settings for single upload
// TODO set max upload size
const upload = multer({ 
    dest : './tempUploads'
}).single('file');


// process successful uploads
const processFile = function processFile(theFile) {
  console.log('File name: ' + theFile.filename);
}

// watch multer for 'file' event emited on succesful uploads
// .addListener('file', processFile);


/** API routes for classifying **/

module.exports = {
  // TODO handle errors better so client knows what happened
  classifyImage : (req, res) => {
    upload(req, res, (uploadError) => {
      const newImage = new ImageDb();

      const fileName = req.file.originalname;
      newImage.image_name = uniqueUriSafeName(fileName);
      // TODO filter unwanted content types
      newImage.img.content_type = getFileType(fileName);
      newImage.image_path =  getFilePath(newImage.image_name);
     
      //store image after reading the file in the async call back
      fs.readFile(req.file.path, (err, fsData) => {
        if(err){
          console.log(err);
          throw err;
        }
        console.log('-- Saving %s to mongo-- ', newImage.image_name );
        newImage.img.data = fsData;
        newImage.save();
      });
      if(uploadError){
        console.log(uploadError);
        res.json({error_code:1,err_desc:uploadError});
        return;
      }
      res.json({error_code:0,err_desc:null});
    });
  },
  getListOfAllClassifiedImages : (req, res) => {
    // return all documents without image data
    ImageDb.find({}, { img: 0 }, (err, classifiedImages) => {
      if (err) res.status(500).send(error);

      res.status(200).json(classifiedImages);
    });
  },
  getClassifiedImageData : (req, res) => {
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

function uniqueUriSafeName( fileName ) {
  //only letters and numbers
  return ( fileName + Date.now() ).replace(/[^a-z\d]+/gi, "");
}

function getFileType( fileName ) {
  return 'image/' + fileName.split('.').slice(-1)[0];
}

function getFilePath( imageName ) {
  return 'http://localhost:3000/classifiedImages/' + imageName;
}

console.log( '-- clasify API loaded --' );
