// <reference path='../../../typings/tsd.d.ts' />
import FlowerRepository = require('./../repository/FlowerRepository');
import IFlowerBusiness = require('./interfaces/FlowerBusiness');
import IFlowerModel = require('./../model/interfaces/FlowerModel');
import FlowerModel = require('./../model/FlowerModel');


class FlowerBusiness  implements FlowerBusiness {
  private _flowerRepository: FlowerRepository;

  constructor () {
    this._flowerRepository = new FlowerRepository();
  }

  create (item: IFlowerModel, callback: (error: any, result: any) => void) {
    this._flowerRepository.create(item, callback);
  }

  retrieve (callback: (error: any, result: any) => void) {
    this._flowerRepository.retrieve(callback);
  }

  update (_id: string, item: IFlowerModel, callback: (error: any, result: any) => void) {

    this._flowerRepository.findById(_id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._flowerRepository.update(res._id, item, callback);
      }
    });
  }

  delete (_id: string, callback: ( error: any, result: any) => void) {
    this._flowerRepository.delete(_id , callback);
  }

  findById (_id: string, callback: ( error: any, result: IFlowerModel) => void) {
    this._flowerRepository.findById(_id, callback);
  }

}


Object.seal(FlowerBusiness);
export = FlowerBusiness;
