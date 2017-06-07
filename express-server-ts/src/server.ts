import * as express from 'express';
import * as winston from 'winston';
import { json, urlencoded } from 'body-parser';
import * as http from 'http';
import * as path from 'path';
// import * as morgan from 'morgan';
import { Express, Request, Response } from 'express';

// Get our API routes
import * as api from './routes/routes';

const PORT = 3000;

/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {

  private app: Express;

  constructor() {
    this.app = express();

    // Parsers for POST data
    this.app.use(json());
    this. app.use(urlencoded({ extended: false }));

    // Cross Origin middleware
    this.app.use(function(req, res, next) {
      res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, OPTIONS, DELETE, GET');
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Credentials', 'true' );
      next();
    });

    // this.app.use(morgan('combined'));
    this.setupRoutes();

    const port = process.env.PORT || PORT;
    this.app.set( 'port', port);

    this.app.listen(port, () => {
      winston.log('info', '--> Server successfully started at port %d', port);
    });
  }

  /**
   * Setup all endpoints of your API. You can extend this method or if there are many different routes,
   * it might be better to move this to a separate class.
   */
  private setupRoutes(): void {
    this.app.use( '/', api );

    // Catch all other routes and return the index file
    this.app.get( '*', (req, res) => {
      res.sendFile( path.join(__dirname, './index.html' ));
    });
  }
}
new Server();
