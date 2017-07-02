import express = require('express');
import FlowerController = require('./../../controllers/FlowerController');

const router = express.Router();
class FlowerRoutes {
  private _flowerController: FlowerController;

  constructor () {
    this._flowerController = new FlowerController();
  }
  get routes () {
    const controller = this._flowerController;
    router.get('/flowers', controller.retrieve);
    router.post('/flowers', controller.create);
    router.put('/flowers/:_id', controller.update);
    router.get('/flowers/:_id', controller.findById);
    router.delete('/flowers/:_id', controller.delete);

    return router;
  }

}

Object.seal(FlowerRoutes);
export = FlowerRoutes;
