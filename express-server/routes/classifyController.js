const mongoose = require('mongoose');
// MongoDB URL from the docker-compose file and gridfs path
const dbHost = 'mongodb://database/mean-docker/gridfstest';
gridConn = mongoose.createConnection(dbHost);
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
const gfs = Grid(gridConn.db, mongoose.mongo);


console.log('clasify API loaded');

/** Setting up storage using multer-gridfs-storage */
const storage = GridFsStorage({
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

//multer settings for single upload
const upload = multer({ 
    storage: storage
}).single('file');

// process successful uploads
const processFile = function processFile(theFile) {
  console.log('File name: ' + theFile.filename);
}

// 'file' event emited on succesful uploads
storage.addListener('file', processFile);


/** API routes for classifying **/

module.exports = {
	classifyImage : (req, res) => {
    upload(req, res, (err) => {
      if(err){
        console.log(err);
        res.json({error_code:1,err_desc:err});
        return;
      }

      res.json({error_code:0,err_desc:null});
    });
	},
	getClassifiedImage : (req, res) => {
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
	}
}
