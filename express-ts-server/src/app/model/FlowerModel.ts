import IFlowerModel = require('./interfaces/FlowerModel');

class FlowerModel {

  private _flowerModel: IFlowerModel;

  constructor(flowerModel: IFlowerModel) {
    this._flowerModel = flowerModel;
  }
  get common_name (): string {
    return this._flowerModel.common_name;
  }

  get sci_name (): string {
    return this._flowerModel.sci_name;
  }

  get wiki_link (): string {
    return this._flowerModel.wiki_link;
  }

  get in_garden (): boolean {
    return this._flowerModel.in_garden;
  }

}
Object.seal(FlowerModel);
export =  FlowerModel;
