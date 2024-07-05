const express = require('express');
const notificationController = require('../controllers/notificationcontroller');
const router = express.Router();

router.get('/', notificationController.getNotifications);

router.get('/:vid' , notificationController.getVendorInfo );

router.get('/:packageName?/:category_name?', notificationController.getNotificationsByParams);

module.exports = router;
