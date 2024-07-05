const express = require('express');
const linksController = require('../controllers/linksController');
const router = express.Router();

router.get('/', linksController.getLinks);

module.exports = router;
