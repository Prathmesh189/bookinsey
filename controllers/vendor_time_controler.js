const { sequelize } = require('../models');

const createVendorTime = async (req, res) => {
  try {
    const newVendorTime = await sequelize.query(
      'INSERT INTO vendor_time (vendor_id, choose_time, status, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)',
      {
        replacements: [
          req.body.vendor_id,
          req.body.choose_time,
          req.body.status,
          new Date(), 
          new Date() 
        ]
      }
    );
    res.status(201).json({ message: 'Vendor time entry created successfully', vendor_time: newVendorTime });
  } catch (error) {
    console.error('Error creating vendor time entry:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const createVendorTimebyId = async (req, res) => {
  try {
    const { vendor_id } = req.params; 

    const newVendorTime = await sequelize.query(
      'INSERT INTO vendor_time (vendor_id, choose_time, status, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)',
      {
        replacements: [
          vendor_id,
          req.body.choose_time,
          req.body.status,
          new Date(), 
          new Date() 
        ]
      }
    );
    res.status(201).json({ message: 'Vendor time entry created successfully', vendor_time: newVendorTime });
  } catch (error) {
    console.error('Error creating vendor time entry:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const getAllVendorTimes = async (req, res) => {
  try {
    const vendorTimes = await sequelize.query('SELECT * FROM vendor_time', { type: sequelize.QueryTypes.SELECT });
    res.status(200).json({ message: 'Successfully retrieved vendor time entries', vendor_times: vendorTimes });
  } catch (error) {
    console.error('Error fetching vendor time entries:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = {
  createVendorTime,
  getAllVendorTimes,
  createVendorTimebyId
};
