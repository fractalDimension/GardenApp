// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const axios = require('axios');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// Mock data API
const APIAxios = 'https://jsonplaceholder.typicode.com';

// Connect to mongodb
mongoose.connect(dbHost);

// Create the schemas
const Schema = mongoose.Schema;

const flowerDbSchema = new Schema({
  common_name: String,
  sci_name: String,
  wiki_link: String,
  in_garden: Boolean
});

// Create mongoose models
const FlowerDb = mongoose.model('FlowerDb', flowerDbSchema); 

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

/* GET all flowers in db*/
router.get('/flowers', (req, res) => {

  FlowerDb.find({}, (err, flowers) => {
    if (err) res.status(500).send(error)

    res.status(200).json(flowers);
  });
});

/* GET single flower by name */
router.get('/flowers/:name', (req, res) => {
  FlowerDb.find({'common_name': {$regex: /^req.param.name/}}, (err, flowers) => {
    if (err) res.status(500).send(error)

    res.status(200).json(flowers);
  });
});

/* Create an entry in the flower db*/
router.post('/flowers', (req, res) => {
  let flower = new FlowerDb({
    common_name: req.body.common_name,
    sci_name: req.body.sci_name,
    wiki_link: req.body.wiki_link,
    in_garden: req.body.in_garden
  });

  flower.save(error => {
    if (error) res.status(500).send(error);

    res.status(201).json({
      message: 'Flower added to database'
    });
  });
});

/* GET all posts */
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${APIAxios}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});


module.exports = router;