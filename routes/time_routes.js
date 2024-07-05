// routes/time.routes.js
const express = require('express');
const timeController = require('../controllers/time_controller');

const router = express.Router();

router.get('/', timeController.getAllTimes);

module.exports = router;
