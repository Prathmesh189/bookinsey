const express = require('express');
const router = express.Router();
const holidayController = require('../controllers/holiday_controller');

router.post('/', holidayController.createEntery);

router.get('/', holidayController.getAllOffs);

router.get('/status/date/:vid', holidayController.getDateStatus);

router.delete('/delete/:vid/:date/:time', holidayController.getDateStatusandDelete);

router.get('/status/:vid', holidayController.getDateStatusoffvid);

router.get('/history/:vid', holidayController.getDateStatusoffvidhistory);

router.post('/fullday',holidayController.createFulldayHoliday);  

router.delete('/fullday' , holidayController.deleteEntriesByVendorAndTime);

router.get('/checkFullDayHoliday/:vid/:date', holidayController.checkFullDayHoliday);

    
module.exports = router;
