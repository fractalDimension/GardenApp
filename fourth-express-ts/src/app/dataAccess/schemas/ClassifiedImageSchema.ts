import DataAccess = require('./../../dataAccess/DataAccess');
import IClassifiedImageModel = require('./../../model/interfaces/ClassifiedImageModel');

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

// NOTE!! I have not tested requiring nested fields. As it stands the image and
// predition fields are allowed to be empty...

class ClassifiedImageSchema {

  static get schema () {
    const schema =  mongoose.Schema({
      image_name: {
        type: String,
        required: true
      },
      image_path: {
        type: String,
        required: true,
      },
      date_uploaded: {
        type: Date,
        required: true
      },
      img: { // might require to be an object for nested items
        data: {
          type: Buffer,
          required: true
        },
        content_type: {
          type: String,
          required: true
        }
      },
      predictions: [
        {
          date: Number,
          model_version: String,
          values_by_class: [
            {class_name: String, probability: Number}
          ]
        }
      ]
    });

    return schema;
  }

}
const schema = mongooseConnection.model<IClassifiedImageModel>('Classified Images', ClassifiedImageSchema.schema);
export = schema;
