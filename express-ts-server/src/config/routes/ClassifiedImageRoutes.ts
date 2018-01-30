import express = require('express');
import ClassifiedImageController = require('./../../controllers/ClassifiedImageController');

const router = express.Router();
const multer = require('multer');

// multer middleware for single upload
// TODO move to controller
// TODO set max upload size
const upload = multer({
    storage : multer.memoryStorage() // TODO read from a temp store instead this can use too much memory
}).single('file');

class ClassifiedImageRoutes {
  private _classifieImageController: ClassifiedImageController;

  constructor () {
    this._classifyImageController = new ClassifiedImageController();
  }
  get routes () {
    const controller = this._classifyImageController;
    router.get('/allClassifiedImages', controller.retrieve);
    router.post('/classifyImage', upload, controller.create, controller.classify);
    router.put('/classifiedImages/:_id', controller.update);
    router.get('/classifiedImages/:_id', controller.findById);
    router.get('/classifiedImages/:_id/image', controller.findImageFileById);
    router.delete('/classifiedImages/:_id', controller.delete); // TODO permission this

    return router;
  }

}

Object.seal(ClassifiedImageRoutes);
export = ClassifiedImageRoutes;
