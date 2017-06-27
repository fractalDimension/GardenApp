import express = require('express');
import FlowerBusiness = require('./../app/business/FlowerBusiness');
import IBaseController = require('./interfaces/base/BaseController');
import IFlowerModel = require('./../app/model/interfaces/FlowerModel');



class FlowerController implements IBaseController <FlowerBusiness> {

  create(req: express.Request, res: express.Response): void {
    console.log(req.body);
    try {
      const flower: IFlowerModel = <IFlowerModel>req.body;
      const flowerBusiness = new FlowerBusiness();
      flowerBusiness.create(flower, (error: any, result: any) => {
        if (error) {
          console.log('error in db add');
          res.send({'error': 'error'});
        } else {
          res.send({'success': 'success'});
        }
      });
    } catch (e)  {
      console.log(e);
      res.send({'error': 'error in your request'});

    }
  }
  update(req: express.Request, res: express.Response): void {
    try {
      const hero: IFlowerModel = <IFlowerModel>req.body;
      const _id: string = req.params._id;
      const flowerBusiness = new FlowerBusiness();
      flowerBusiness.update(_id, hero, (error: any, result: any) => {
        if (error) {
          res.send({'error': 'error'});
        } else {
          res.send({'success': 'success'});
        }
      });
    } catch (e)  {
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }
  delete(req: express.Request, res: express.Response): void {
    try {
      const _id: string = req.params._id;
      const flowerBusiness = new FlowerBusiness();
      flowerBusiness.delete(_id, (error: any, result: any) => {
        if (error) {
          res.send({'error': 'error'});
        } else {
          res.send({'success': 'success'});
        }
      });
    } catch (e)  {
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }
  retrieve(req: express.Request, res: express.Response): void {
    try {
      const flowerBusiness = new FlowerBusiness();
      flowerBusiness.retrieve((error: any, result: any) => {
        if (error) {
          res.send({'error': 'error'});
        } else {
          res.send(result);
        }
      });
    } catch (e)  {
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }
  findById(req: express.Request, res: express.Response): void {
    try {
      const _id: string = req.params._id;
      const flowerBusiness = new FlowerBusiness();
      flowerBusiness.findById(_id, (error: any, result: any) => {
        if (error) {
          res.send({'error': 'error'});
        } else {
          res.send(result);
        }
      });
    } catch (e)  {
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }

}
export = FlowerController;
