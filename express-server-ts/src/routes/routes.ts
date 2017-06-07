import { Router } from 'express';

const classifyCtrl = require('./classifyController');
const flowersCtrl = require('./flowersController');

const router = Router();

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works');
});

router.route('/classifyImage').post(classifyCtrl.classifyImage);
router.route('/allClassifiedImages').get(classifyCtrl.getListOfAllClassifiedImages);
router.route('/classifiedImages/:imageName').get(classifyCtrl.getClassifiedImageData);

router.route('/flowers').get(flowersCtrl.getAllFlowers);
router.route('/flowers/:name').get(flowersCtrl.getFlowerByName);
router.route('/flowers').post(flowersCtrl.addFlower);

export { router };
