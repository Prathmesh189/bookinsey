// routes/service.routes.js
const express = require('express');
const serviceController = require('../controllers/service_controller');

const router = express.Router();

router.post('/', serviceController.createService);

router.get('/', serviceController.getAllServices);

router.get('/:category_id', serviceController.getAllServicesByCategoryId);

module.exports = router;
