
const express = require('express');
const router = express.Router();
const vendorChooseTimeController = require('../controllers/vendor_choose_time_controller');

router.get('/', vendorChooseTimeController.getAllChooseTime);

router.post('/', vendorChooseTimeController.createVendorChooseTime);

// router.post('/m', vendorChooseTimeController.Createmultiple);


router.get('/:vid', vendorChooseTimeController.getAllVendorChooseTime);

router.delete('/delete/:id', vendorChooseTimeController.deleteVendorChooseTime);


router.delete('/:vid', vendorChooseTimeController.deleteVendorChooseTimeByVidAndTime);



router.put('/:id', vendorChooseTimeController.updateVendorChooseTime);


router.post('/generate/:vid', vendorChooseTimeController.generateTimeSlots);


module.exports = router;
