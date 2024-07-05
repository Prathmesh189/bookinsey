// routes/vendorTime.routes.js

const express = require('express');
const vendorTimeController = require('../controllers/vendor_time_controler');

const router = express.Router();

// Create a new vendor time entry
router.post('/', vendorTimeController.createVendorTime);
router.post('/:vendor_id/time', vendorTimeController.createVendorTimebyId);

// Get all vendor time entries
router.get('/', vendorTimeController.getAllVendorTimes);

// router.post('/generate/:vid', vendorChooseTimeController.generateVendorChooseTime);

module.exports = router;
