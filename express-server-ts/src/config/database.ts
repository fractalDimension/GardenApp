import mongoose = require( 'mongoose' );


  // MongoDB URL from the docker-compose file
const rootDbHost = 'mongodb://database/mean-docker';
const classifyDbHost = 'mongodb://database/mean-docker/classifyImageStore';

mongoose.connect( this.rootDbHost );
mongoose.createConnection( this.classifyDbHost );

export { mongoose };
