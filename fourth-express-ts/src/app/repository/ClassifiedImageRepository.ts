import ClassifiedImageModel = require('./../model/ClassifiedImageModel');
import IClassifiedImageModel = require('./../model/interfaces/ClassifiedImageModel');
import ClassifiedImageSchema = require('./../dataAccess/schemas/ClassifiedImageSchema');
import RepositoryBase = require('./base/RepositoryBase');

class ClassifiedImageRepository  extends RepositoryBase<IClassifiedImageModel> {
    constructor () {
        super(ClassifiedImageSchema);
    }
}

Object.seal(ClassifiedImageRepository);
export = ClassifiedImageRepository;
