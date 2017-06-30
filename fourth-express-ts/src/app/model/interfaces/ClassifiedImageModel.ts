// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require('mongoose');

interface ClassifiedImageModel extends mongoose.Document {
  image_name: string;
  image_path: string;
  date_uploaded: Date;
  img: {
    data: Buffer;
    content_type: string;
  };
  predictions: [
    {
      date: number;
      model_version: string;
      values_by_class: [
        { class_name: string; probability: number; }
      ]
    }
  ];
}

export = ClassifiedImageModel;
