const mongoose = require('mongoose');

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

module.exports ={
  getAllFlowers : (req, res) => {
    FlowerDb.find({}, (err, flowers) => {
      if (err) res.status(500).send(error)

      res.status(200).json(flowers);
    });
  },
  getFlowerByName : (req, res) => {
    FlowerDb.find({'common_name': {$regex: /^req.param.name/}}, (err, flowers) => {
      if (err) res.status(500).send(error)

      res.status(200).json(flowers);
    });
  },
  addFlower : (req, res) => {
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
  }
}

console.log('-- flower API loaded --');
