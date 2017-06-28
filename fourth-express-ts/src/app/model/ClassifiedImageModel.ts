import IClassifiedImageModel = require('./interfaces/ClassifiedImageModel');

class ClassifiedImageModel {

  private _classifiedImageModel: IClassifiedImageModel;

  constructor(classifieImageModel: IClassifiedImageModel) {
    this._classifiedImageModel = classifieImageModel;
  }
  get image_name (): string {
    return this._classifiedImageModel.image_name;
  }

  get image_path (): string {
    return this._classifiedImageModel.image_path;
  }

  get date_uploaded (): Date {
    return this._classifiedImageModel.date_uploaded;
  }

  get img (): object {
    return this._classifiedImageModel.img;
  }

  get predictions(): object[] {
    return this._classifiedImageModel.predictions;
  }

}
Object.seal(ClassifiedImageModel);
export =  ClassifiedImageModel;
