// routes/serviceCharges.routes.js

const express = require('express');
const serviceChargesController = require('../controllers/service_charges_controller');

const router = express.Router();

router.post('/', serviceChargesController.createServiceCharge);

router.get('/total/:vid', serviceChargesController.countServiceCharges );


router.get('/', serviceChargesController.getAllServiceCharges);

router.get('/:vid/:category_id', serviceChargesController.getAllServiceChargesByVid);

router.put('/:id',serviceChargesController.editServiceCharge);

router.delete('/:id',serviceChargesController.deleteServiceChargeAll);

router.delete('/:service_id/:vid',serviceChargesController.deleteServiceCharge);




module.exports = router;


