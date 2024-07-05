const express = require('express');
const router = express.Router();
const packagesController = require('../controllers/packages_controller');

router.get('/', packagesController.getAllPackages);
router.get('/prices/:pid', packagesController.getPackagePrices);

router.post('/', packagesController.createPackage);

router.get('/perday/:duration/:pid',packagesController.getPerDayRate);


router.get('/perday/:duration/:pid',packagesController.getPerDayRate);




router.get('/perday/:duration/:pid',packagesController.getPerDayRate);








module.exports = router;
