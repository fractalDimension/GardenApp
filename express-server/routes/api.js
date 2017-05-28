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

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

// Get all posts
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