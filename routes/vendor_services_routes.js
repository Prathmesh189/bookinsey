// routes/vendorServices.routes.js

const express = require('express');
const vendorServicesController = require('../controllers/vendor_Services_controller');

const router = express.Router();


router.post('/', vendorServicesController.createVendorService);


router.get('/', vendorServicesController.getAllVendorServices);

router.get('/vendor/:vid/services', vendorServicesController.getAllVendorServicesByVid);




module.exports = router;
