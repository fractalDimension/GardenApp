import DataAccess = require('./../../dataAccess/DataAccess');
import IFlowerModel = require('./../../model/interfaces/FlowerModel');

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class FlowerSchema {

  static get schema () {
    const schema =  mongoose.Schema({
      common_name: {
        type: String,
        required: true
      },
      sci_name: {
        type: String,
        required: true
      },
      wiki_link: {
        type: String,
        required: false
      },
      in_garden: {
        type: Boolean,
        required: true
      }
    });

    return schema;
  }

}
const schema = mongooseConnection.model<IFlowerModel>('Flowers', FlowerSchema.schema);
export = schema;
