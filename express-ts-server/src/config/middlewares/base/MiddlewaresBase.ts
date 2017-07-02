import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

// request and error logging
import expressWinston = require('express-winston');
import winston = require('winston'); // for transports.Console

import MethodOverride = require('./../MethodOverride');
import BaseRoutes = require('./../../routes/base/BaseRoutes');


class MiddlewaresBase {

  static get configuration () {
    const app = express();
    app.use(bodyParser.json());
    app.use(MethodOverride.configuration());
    app.use(cors()); // could be dangerous, probably should enable on per route basis
    
    /*
    app.use(expressWinston.logger({ // TODO move to own file
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ]
    }));
    */

    app.use(new BaseRoutes().routes);

    /*
    app.use(expressWinston.errorLogger({ // TODO move to own file
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ]
    }));
    */

    return app;
  }
}
Object.seal(MiddlewaresBase);
export = MiddlewaresBase;
