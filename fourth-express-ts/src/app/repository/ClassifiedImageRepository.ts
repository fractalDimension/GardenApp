import ClassifiedImageModel = require('./../model/ClassifiedImageModel');
import IClassifiedImageModel = require('./../model/interfaces/ClassifiedImageModel');
import ClassifiedImageSchema = require('./../dataAccess/schemas/ClassifiedImageSchema');
import RepositoryBase = require('./base/RepositoryBase');

class ClassifiedImageRepository  extends RepositoryBase<IClassifiedImageModel> {
  constructor () {
    super(ClassifiedImageSchema);
  }

  retrieve (callback: (error: any, result: any) => void) {
    console.log('override retreive');
    this._model.find({}).sort('-date_uploaded').exec(callback);
  }
}

Object.seal(ClassifiedImageRepository);
export = ClassifiedImageRepository;
