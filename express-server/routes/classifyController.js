const mongoose = require('mongoose');
// MongoDB URL from the docker-compose file and gridfs path
const dbHost = 'mongodb://database/mean-docker/simpleImageStore';
mongoose.createConnection(dbHost);
const multer = require('multer');
const fs = require('fs');
const ClassifySchema = mongoose.Schema;

// Create Schema
const imageSchema = new ClassifySchema({
  image_name: String,
  img :
    { data: Buffer, content_type: String }
});

const ImageDb = mongoose.model('ImageDb', imageSchema);

//multer settings for single upload
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
      newImage.image_name = req.file.originalname + Date.now();
      // TODO get file type correctly. It is returning undefined currently
      newImage.img.content_type = req.file.originalname.split('.').slice(-1)[0];
      //store image after reading the file in the call back
      newImage.img.data = fs.readFile(req.file.path, (err, fsData) => {
        if(err){
          console.log(err);
          throw err;
        }
        console.log('--Saving %s to mongo--', newImage.image_name);
        console.log('type: ' + newImage.img.content_type);
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
      if (err) res.status(500).send(error)

      res.status(200).json(classifiedImages);
    });
  }
  // Write function to return a single image from the db
  // fix file type saving bug first so express knows what content type to send back
}

console.log('clasify API loaded');
