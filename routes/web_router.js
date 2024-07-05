const express = require('express');
const router = express.Router();
const webVendorChooseTimeController = require('../controllers/web_choose_time_contr');

router.post('/', webVendorChooseTimeController.createWebVendorChooseTime);
router.get('/', webVendorChooseTimeController.getall);

router.get('/checkPresentOrNot/:vid', webVendorChooseTimeController.checkVidPresence); 
router.get('/getFor/:vid', webVendorChooseTimeController.getallForVId); 


router.delete('/:vid', webVendorChooseTimeController.deleteVendorChooseTimeByVidAndTime);


router.delete('/:vid', webVendorChooseTimeController.deleteVendorChooseTimeByVidAndTime);







module.exports = router;