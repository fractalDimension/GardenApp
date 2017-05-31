// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const axios = require('axios');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// Mock data API
const APIAxios = 'https://jsonplaceholder.typicode.com';

// Connect to mongodb
mongoose.connect(dbHost);

/*
// File upload
gridConn = mongoose.createConnection(dbHost + '/gridfstest');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
const gfs = Grid(gridConn.db, mongoose.mongo);

// Setting up storage using multer-gridfs-storage 
const storage = GridFsStorage({
  gfs : gfs,
  filename: function (req, file, cb) {
      const datetimestamp = Date.now();
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
  },
  // With gridfs we can store aditional meta-data along with the file
  metadata: function(req, file, cb) {
      cb(null, { originalname: file.originalname });
  },
  root: 'ctFiles' //root name for collection to store files into
});
*/

/*
// Add listener for successful file upload
console.log('TEST LOG OUTPUT ------------!!!!!!!!!11');

const processFile = function processFile(theFile) {
  console.log('File name: ' + theFile.filename);
}

storage.addListener('file', processFile);



//multer settings for single upload
const upload = multer({ 
    storage: storage
}).single('file');
*/


// Create the schemas
const Schema = mongoose.Schema;

const flowerDbSchema = new Schema({
  common_name: String,
  sci_name: String,
  wiki_link: String,
  in_garden: Boolean
});

// Create mongoose models
const FlowerDb = mongoose.model('FlowerDb', flowerDbSchema); 

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});


/* GET all posts */
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${APIAxios}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});


module.exports = router;