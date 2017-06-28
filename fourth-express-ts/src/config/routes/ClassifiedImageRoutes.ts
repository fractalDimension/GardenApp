import express = require('express');
import ClassifiedImageController = require('./../../controllers/ClassifiedImageController');

const router = express.Router();
class ClassifiedImageRoutes {
  private _classifieImageController: ClassifiedImageController;

  constructor () {
    this._classifieImageController = new ClassifiedImageController();
  }
  get routes () {
    const controller = this._classifieImageController;
    router.get('/allClassifiedImages', controller.retrieve);
    router.post('/classifyImage', controller.create);
    router.put('/classifiedImages/:_id', controller.update);
    router.get('/classifiedImages/:_id', controller.findById); // might need _imageName instead
    // router.delete('/flowers/:_id', controller.delete);

    return router;
  }

}

Object.seal(ClassifiedImageRoutes);
export = ClassifiedImageRoutes;
