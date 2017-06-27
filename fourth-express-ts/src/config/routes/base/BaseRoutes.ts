import express = require('express');
import FlowerRoutes = require('./../FlowerRoutes');
import SpartanRoutes = require('./../SpartanRoutes');
let app = express();

class BaseRoutes {

    get routes() {
        app.use('/', new FlowerRoutes().routes);
        app.use('/', new SpartanRoutes().routes);
        return app;
    }
}
export = BaseRoutes;
