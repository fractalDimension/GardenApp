import express = require('express');
import FlowerRoutes = require('./../FlowerRoutes');
import ClassifiedImageRoutes = require('./../ClassifiedImageRoutes');
let app = express();

class BaseRoutes {

    get routes() {
        app.use('/', new FlowerRoutes().routes);
        app.use('/', new ClassifiedImageRoutes().routes);
        return app;
    }
}
export = BaseRoutes;
