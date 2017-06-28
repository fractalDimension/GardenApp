import express = require('express');
import ClassifiedImageBusiness = require('./../app/business/ClassifiedImageBusiness');
import IBaseController = require('./interfaces/base/BaseController');
import IClassifiedImageModel = require('./../app/model/interfaces/ClassifiedImageModel');
import IMulterFileModel = require('./../app/model/interfaces/MulterFileModel');

const multer = require('multer');

// multer settings for single upload
// TODO set max upload size
const upload = multer({
    dest : './tempUploads'
}).single('file');

class ClassifiedImageController implements IBaseController <ClassifiedImageBusiness> {

  create(req: express.Request & {file: IMulterFileModel}, res: express.Response): void {
    console.log('this is the req.body'); // req.body);
    try {
      // const classifiedImage: IClassifiedImageModel = <IClassifiedImageModel>req.body;
      const classifiedImageBusiness = new ClassifiedImageBusiness();

      // use multer to upload
      upload( req, res, ( uploadError: any ) => { // res? handle error properly by throwing?
        if ( uploadError ) {
          console.log('multer error');
          // return handleClassifyError( res, { error_code: 1, err_desc: uploadError } );
        }

        classifiedImageBusiness.create( req, (error: any, result: any) => {
          if (error) {
            console.log('error in image db add');
            res.send({'error': 'error'});
          } else {
            res.send({'success': 'success'});
          }
        });

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

}
export = ClassifiedImageController;
