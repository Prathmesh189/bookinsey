const express = require('express');
const router = express.Router();
const packagesDetailsController = require('../controllers/package_details');

router.get('/', packagesDetailsController.getAllPackageDetails);
router.get('/byPID', packagesDetailsController.getAllPackageDetailsbyPID);

router.post('/', packagesDetailsController.createPackageDetails);

module.exports = router;
