// <reference path='../../../typings/tsd.d.ts' />
import ClassifiedImageRepository = require('./../repository/ClassifiedImageRepository');
import IClassifiedImageBusiness = require('./interfaces/ClassifiedImageBusiness');
import IClassifiedImageModel = require('./../model/interfaces/ClassifiedImageModel');
import ClassifiedImageModel = require('./../model/ClassifiedImageModel');
import IMulterFileModel = require('./../model/interfaces/MulterFileModel');
import date = require('date-and-time');

import { Request, Response } from 'express';


class ClassifiedImageBusiness  implements ClassifiedImageBusiness {
  private _classifiedImageRepository: ClassifiedImageRepository;

  constructor () {
    this._classifiedImageRepository = new ClassifiedImageRepository();
  }

  create (req: Request & {file: IMulterFileModel}, callback: (error: any, result: any) => void) {

    console.log('trying to save the file named: ', req.file.originalname);

    // TODO move this section into a helper function
    const imageToClassify: IClassifiedImageModel = <IClassifiedImageModel>{};
    imageToClassify.image_name = req.file.originalname;
    imageToClassify.date_uploaded = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
    imageToClassify.img = {
      data: req.file.buffer,
      content_type: getFileType(req.file.originalname)
    };

    this._classifiedImageRepository.create(imageToClassify, callback);
  }

  classify (res: Response, callback: (error: any, result: any) => void) {
    console.log('I should do something with this id: ', res.locals._id);

    function sleep(ms: any) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function demo() {
      console.log('Simulate 3 sec classify time');
      await sleep(3000);
      console.log('done classifying');

      const err: any = null;
      const result = 'good jorb';
      callback(err, result);
    }

    demo();
  }

  retrieve (callback: (error: any, result: any) => void) {
    this._classifiedImageRepository.retrieve(callback);
  }

  update (_id: string, item: IClassifiedImageModel, callback: (error: any, result: any) => void) {

    this._classifiedImageRepository.findById(_id, (err, res) => {
      if (err) {
        callback(err, res);
      } else {
        this._classifiedImageRepository.update(res._id, item, callback);
      }
    });
  }

  delete (_id: string, callback: ( error: any, result: any) => void) {
    this._classifiedImageRepository.delete(_id , callback);
  }

  findById (_id: string, callback: ( error: any, result: IClassifiedImageModel) => void) {
    this._classifiedImageRepository.findById(_id, callback);
  }

}


Object.seal(ClassifiedImageBusiness);
export = ClassifiedImageBusiness;


function getFileType( fileName: string ) {
  return 'image/' + fileName.split('.').slice(-1)[0];
}
