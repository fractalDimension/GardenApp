import express = require('express');
import ClassifiedImageBusiness = require('./../app/business/ClassifiedImageBusiness');
import IBaseController = require('./interfaces/base/BaseController');
import IClassifiedImageModel = require('./../app/model/interfaces/ClassifiedImageModel');
import IMulterFileModel = require('./../app/model/interfaces/MulterFileModel');


class ClassifiedImageController implements IBaseController <ClassifiedImageBusiness> {

  create(req: express.Request & {file: IMulterFileModel}, res: express.Response, next: any): void {
    console.log('classify controller create'); // req.body);
    try {

      const classifiedImageBusiness = new ClassifiedImageBusiness();

      classifiedImageBusiness.create( req, (error: any, result: any) => {
        if (error) {
          console.log('error in image db add');
          res.send({'error': 'error'});
        } else {
          console.log('save success');
          // store the saved doc id in the response for the next middleware to use
          res.locals._id = result._id;
          next();
        }
      });

    } catch (e)  {
      console.log(e);
      res.send({'error': 'error in your request'});

    }
  }
  classify(req: express.Request & {file: IMulterFileModel}, res: express.Response): void {
    console.log('controller classify');
    try {
      const classifiedImageBusiness = new ClassifiedImageBusiness();

      classifiedImageBusiness.classify( res, (error: any, result: any) => {
        if (error) {
          console.log('error in image classify');
          res.send({'error': 'error'});
        } else {
          console.log('classify success!!');
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
      const classifiedImage: IClassifiedImageModel = <IClassifiedImageModel>req.body;
      const _id: string = req.params._id;
      const classifiedImageBusiness = new ClassifiedImageBusiness();
      classifiedImageBusiness.update(_id, classifiedImage, (error: any, result: any) => {
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
      const classifiedImageBusiness = new ClassifiedImageBusiness();
      classifiedImageBusiness.delete(_id, (error: any, result: any) => {
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
      const classifiedImageBusiness = new ClassifiedImageBusiness();
      classifiedImageBusiness.retrieve((error: any, result: any) => {
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
      const classifiedImageBusiness = new ClassifiedImageBusiness();
      classifiedImageBusiness.findById(_id, (error: any, result: any) => {
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
  findImageFileById(req: express.Request, res: express.Response): void {
    try {
      const _id: string = req.params._id;
      const classifiedImageBusiness = new ClassifiedImageBusiness();
      classifiedImageBusiness.findById(_id, (error: any, result: any) => {
        if (error) {
          res.send({'error': 'error'});
        } else {
          res.set( 'Content-Type', result.img.content_type );
          res.send( result.img.data );
        }
      });
    } catch (e)  {
      console.log(e);
      res.send({'error': 'error in your request'});
    }
  }

}
export = ClassifiedImageController;
