// routes/leadRoutes.js

const express = require('express');
const router = express.Router();
const leadController = require('../controllers/socketleadcontroller');
const io = require('socket.io');

// Route to create a new lead
router.post('/', (req, res) => {
    leadController.createLead(req, res, io);
});
  
router.get('/', leadController.getAllLeads);


module.exports = router;
