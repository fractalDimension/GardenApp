var express = require('express');

var classifyCtrl = require('./classifyController');
var flowersCtrl = require('./flowersController');

var router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

router.route('/classifyImage').post(classifyCtrl.classifyImage);
router.route('/allClassifiedImages').get(classifyCtrl.getListOfAllClassifiedImages);

router.route('/flowers').get(flowersCtrl.getAllFlowers);
router.route('/flowers/:name').get(flowersCtrl.getFlowerByName);
router.route('/flowers').post(flowersCtrl.addFlower);

module.exports = router;
