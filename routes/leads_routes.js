const express = require('express');
const leadController = require('../controllers/leads_controller.js');

const router = express.Router();

router.post('/', leadController.createLead);
router.get('/count/:vid', leadController.getLeadCountByVendorIds);
router.get('/closed/:vid/:daysCount', leadController.ClosedeadsasPervendorId);
router.get('/arriving/:vid', leadController.ArrivingLeadsPerVendorId);
router.get('/cancelled/:vid/:daysCount', leadController.CancelledeadsasPervendorId);
router.put('/:lead_id', leadController.updateLeadById);
router.get('/', leadController.getAllLeads);
router.get('/pending/:vid', leadController.pendingeadsasPervendorId);
router.get('/calculations/:vid', leadController.getAllCalculationLeadsasPervendorId);
router.get('/homePage/:vid ', leadController.getAllLeadsforHomePage);
router.get('/all/:vid/:daysCount', leadController.getAllvendorIdaa);
router.get('/polling/:vid'   , leadController.getAllLeadsByVendorId );
router.get('/badge/:vid', leadController.BadgeCounting);
router.get('/getlatest/:vid', leadController.getLatestLeadByVendorId);
router.post('/data/byVendorIdAndDate', leadController.getAllDataByVendorIdAndDate);
router.put('/:lead_id', leadController.updateLeadById);
router.get('/makeClosed/:vid' ,leadController.makeClosed_Leads   );
router.get('/pendingOld/:vid', leadController.pendingOldData);
router.get('/:vid/status-0/before-today',leadController.getAllLeadsByVidAndStatusBeforeToday);
router.get('/history/:vid/:daysCount',leadController.historyleads);
router.get('/new/:vid',leadController.getLeadsAsperDate);

module.exports = router;
