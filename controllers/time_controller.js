// controllers/time.controller.js
const { time } = require('../models');



const getAllTimes = async (req, res) => {
  try {
    const times = await Time.findAll();
    res.status(200).json({ message: 'Successfully retrieved times', times });
  } catch (error) {
    console.error('Error fetching times:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = {

  getAllTimes,
};
