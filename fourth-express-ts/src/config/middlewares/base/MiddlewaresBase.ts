import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

import MethodOverride = require('./../MethodOverride');
import BaseRoutes = require('./../../routes/base/BaseRoutes');


class MiddlewaresBase {

  static get configuration () {
    const app = express();
    app.use(bodyParser.json());
    app.use(MethodOverride.configuration());
    app.use(cors()); // could be dangerous, probably should enable on per route basis
    app.use(new BaseRoutes().routes);

    return app;
  }
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;
