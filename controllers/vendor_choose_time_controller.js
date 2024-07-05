const e = require('express');

const VendorChooseTime = require('../models').vendor_choose_time;



const { vendor_choosetime_web } = require('../models');

const Createmultiple = async (req, res) => {
    const { vid, time } = req.body;
    try {
        const existingRecord = await vendor_choosetime_web.findOne({
            where: {
                vid: vid,
                time: time
            }
        });

        if (existingRecord) {
            return res.status(400).json({ error: 'Time slot already exists' });
        }

        const newRecord = await vendor_choosetime_web.create({ vid, time });
        return res.status(201).json(newRecord);
    } catch (error) {
        return res.status(500).json({ error: 'Error creating vendor_choose_time record: ' + error });
    }
};



const getAllChooseTime = async (req, res) => {
  try {
    const allRecords = await VendorChooseTime.findAll();
    return res.json(allRecords);
  } catch (error) {
    return res.status(500).json({ error:  error });
  }
};


const getAllVendorChooseTime = async (req, res) => {
  try {
    
    const { vid } = req.params;
   
    const allRecords = await VendorChooseTime.findAll({
      where: {
        vid: vid
      }
    });

    return res.json(allRecords);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};


const createVendorChooseTime = async (req, res) => {
  const { vid, time } = req.body;
  try {
    const existingRecord = await VendorChooseTime.findOne({
      where: {
        vid: vid,
        time: time
      }
    });

    if (existingRecord) {
      return res.status(400).json({ error: 'Time slot already exists' });
    }

    const newRecord = await VendorChooseTime.create({ vid, time });
    return res.status(201).json(newRecord);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating vendor_choose_time record: ' + error });
  }
};



const deleteVendorChooseTime = async (req, res) => {
  try {
    const { id } = req.params;

  
    const deletedRecord = await VendorChooseTime.destroy({
      where: {
        id: id
      }
    });

    if (deletedRecord) {
      return res.json({ message: 'Record deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};




const deleteVendorChooseTimeByVidAndTime = async (req, res) => {
  try {
    const { vid } = req.params;
    const { time } = req.body;

    const deletedRecords = await VendorChooseTime.destroy({
      where: {
        vid: vid,
        time: time
      }
    });

    if (deletedRecords > 0) {
      return res.json({ message: 'Records deleted successfully' });
    } else {
      return res.status(404).json({ message: 'No matching records found' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



const updateVendorChooseTime = async (req, res) => {
  try {
    const { id } = req.params;
    const { time } = req.body;

    // Find the record by id and update its time
    const updatedRecord = await VendorChooseTime.update(
      { time: time },
      {
        where: {
          id: id
        }
      }
    );

    if (updatedRecord[0] === 1) {
      return res.json({ message: 'Record updated successfully' });
    } else {
      return res.status(404).json({ message: 'Record not found' });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};




const generateTimeSlots = () => {
  const timeSlots = [];
  const startTime = new Date();
  startTime.setHours(9, 30, 0, 0);


  for (let i = 0; i < 25; i++) {
    const currentTime = new Date(startTime.getTime() + i * 30 * 60 * 1000);
    const hour = currentTime.getHours().toString().padStart(2, '0');
    const minute = currentTime.getMinutes().toString().padStart(2, '0');
    timeSlots.push(`${hour}:${minute}`);
  }
  return timeSlots;
};






module.exports = {
  getAllVendorChooseTime,
  createVendorChooseTime,
  getAllChooseTime,
  updateVendorChooseTime,
  deleteVendorChooseTime,
  deleteVendorChooseTimeByVidAndTime,
  generateTimeSlots


};
