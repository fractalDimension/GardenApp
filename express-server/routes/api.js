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

// File upload
gridConn = mongoose.createConnection(dbHost + '/gridfstest');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
const gfs = Grid(gridConn.db, mongoose.mongo);

/** Setting up storage using multer-gridfs-storage */
var storage = GridFsStorage({
  gfs : gfs,
  filename: function (req, file, cb) {
      const datetimestamp = Date.now();
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
  },
  /** With gridfs we can store aditional meta-data along with the file */
  metadata: function(req, file, cb) {
      cb(null, { originalname: file.originalname });
  },
  root: 'ctFiles' //root name for collection to store files into
});

const upload = multer({ //multer settings for single upload
    storage: storage
}).single('file');

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

router.post('/uploadImage', (req, res) => {
  upload(req,res,function(err){
    if(err){
      res.json({error_code:1,err_desc:err});
      return;
    }
    res.json({error_code:0,err_desc:null});
  });
});

router.get('/uploadedImages/:filename', (req, res) => {
  gfs.collection('ctFiles'); //set collection name to lookup into

  /** First check if file exists */
  gfs.files.find({filename: req.params.filename}).toArray((err, files) => {
    if(!files || files.length === 0){
      return res.status(404).json({
        responseCode: 1,
        responseMessage: "error"
      });
    }
    /** create read stream */
    const readstream = gfs.createReadStream({
      filename: files[0].filename,
      root: "ctFiles"
    });
    /** set the proper content type */
    res.set('Content-Type', files[0].contentType)
    /** return response */
    return readstream.pipe(res);
  });
});

/* GET all flowers in db*/
router.get('/flowers', (req, res) => {

  FlowerDb.find({}, (err, flowers) => {
    if (err) res.status(500).send(error)

    res.status(200).json(flowers);
  });
});

/* GET single flower by name */
router.get('/flowers/:name', (req, res) => {
  FlowerDb.find({'common_name': {$regex: /^req.param.name/}}, (err, flowers) => {
    if (err) res.status(500).send(error)

    res.status(200).json(flowers);
  });
});

/* Create an entry in the flower db*/
router.post('/flowers', (req, res) => {
  let flower = new FlowerDb({
    common_name: req.body.common_name,
    sci_name: req.body.sci_name,
    wiki_link: req.body.wiki_link,
    in_garden: req.body.in_garden
  });

  flower.save(error => {
    if (error) res.status(500).send(error);

    res.status(201).json({
      message: 'Flower added to database'
    });
  });
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