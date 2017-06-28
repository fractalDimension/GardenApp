// <reference path='../../../typings/tsd.d.ts' />
import ClassifiedImageRepository = require('./../repository/ClassifiedImageRepository');
import IClassifiedImageBusiness = require('./interfaces/ClassifiedImageBusiness');
import IClassifiedImageModel = require('./../model/interfaces/ClassifiedImageModel');
import ClassifiedImageModel = require('./../model/ClassifiedImageModel');
import IMulterFileModel = require('./../model/interfaces/MulterFileModel');

import { Request } from 'express';


class ClassifiedImageBusiness  implements ClassifiedImageBusiness {
  private _classifiedImageRepository: ClassifiedImageRepository;

  constructor () {
    this._classifiedImageRepository = new ClassifiedImageRepository();
  }

  create (req: Request & {file: IMulterFileModel}, callback: (error: any, result: any) => void) {
    console.log('i tried to do something before saving the file');


    const fileName = req.file.originalname;
    console.log(fileName);

    const flower: IClassifiedImageModel = <IClassifiedImageModel>req.body;


    this._classifiedImageRepository.create(flower, callback);
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
