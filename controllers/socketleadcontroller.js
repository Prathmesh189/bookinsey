// leadController.js

const { Lead } = require('../models');

// Function to create a new lead
exports.createLead = async (req, res, io) => {
    try {
        const lead = await Lead.create(req.body);
        // Emit a Socket.IO event for new lead
        io.emit('new_lead', { lead });
        res.status(201).json({ message: 'Lead created successfully', lead });
    } catch (error) {
        console.error('Error creating lead:', error);
        res.status(500).json({ message: 'Failed to create lead' });
    }
};

exports.getAllLeads = async (req, res) => {
  try {
      const leads = await Lead.findAll();
      res.status(200).json({ leads });
  } catch (error) {
      console.error('Error fetching leads:', error);
      res.status(500).json({ message: 'Failed to fetch leads' });
  }
};