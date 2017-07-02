// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require('mongoose');

interface FlowerModel extends mongoose.Document {
  common_name: string;
  sci_name: string;
  wiki_link: string;
  in_garden: boolean;
}

export = FlowerModel;
