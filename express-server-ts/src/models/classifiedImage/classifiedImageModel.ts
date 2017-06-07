import { mongoose } from '../../config/database';
import { Schema } from 'mongoose';

const ClassifySchema = mongoose.Schema;

const imageSchema = new ClassifySchema({
  image_name: String,
  image_path: String,
  date_uploaded: Date,
  img: {
    data: Buffer,
    content_type: String
  },
  predictions: [
    {
      date: Date,
      model_version: String,
      values_by_class: [
        {class_name: String, probability: Number}
      ]
    }
  ]
});


export imageDbModel = mongoose.model('ImageDb', imageSchema);

