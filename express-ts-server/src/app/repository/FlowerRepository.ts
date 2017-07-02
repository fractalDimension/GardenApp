import FlowerModel = require('./../model/FlowerModel');
import IFlowerModel = require('./../model/interfaces/FlowerModel');
import FlowerSchema = require('./../dataAccess/schemas/FlowerSchema');
import RepositoryBase = require('./base/RepositoryBase');

class FlowerRepository  extends RepositoryBase<IFlowerModel> {
    constructor () {
        super(FlowerSchema);
    }
}

Object.seal(FlowerRepository);
export = FlowerRepository;
