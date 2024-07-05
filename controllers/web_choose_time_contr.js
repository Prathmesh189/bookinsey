const db = require('../models'); 

const WebVendorChooseTime = db.web_vendor_choosetime;

const getall = async (req, res) => {
    try {
      const { vid, time } = req.body;
  
      // Create a new record in the database
      const newRecord = await WebVendorChooseTime.findAll({ vid, time });
  
      // Respond with the newly created record
      res.status(201).json(newRecord);
    } catch (error) {
      // Handle errors
      console.error('Error creating web_vendor_choosetime record:', error);
      res.status(500).json({ error: 'Error creating web_vendor_choosetime record' });
    }
  };
  
  const getallForVId = async (req, res) => {
    try {
      const { vid} = req.params;
  
      // Create a new record in the database
      const newRecord = await WebVendorChooseTime.findAll({
        
        where: { 
            vid: vid,
           
          }
        });
  
      // Respond with the newly created record
      res.status(201).json(newRecord);
    } catch (error) {
      // Handle errors
      console.error('Error creating web_vendor_choosetime record:', error);
      res.status(500).json({ error: 'Error creating web_vendor_choosetime record' });
    }
  };
  


const createWebVendorChooseTime = async (req, res) => {
  try {
    const { vid, time } = req.body;

  
    const newRecord = await WebVendorChooseTime.create({ vid, time });

    
    res.status(201).json(newRecord);
  } catch (error) {
  
    console.error('Error creating web_vendor_choosetime record:', error);
    res.status(500).json({ error: 'Error creating web_vendor_choosetime record' });
  }
};

const checkVidPresence = async (req, res) => {
    try {
      const { vid } = req.params;
  

      const record = await WebVendorChooseTime.findOne({
        where: { vid: vid }
      });
  
      
      res.status(200).json({ present: !!record });
    } catch (error) {
    
      console.error('Error checking vid presence:', error);
      res.status(500).json({ error: 'Error checking vid presence' });
    }
  };



  const deleteVendorChooseTimeByVidAndTime = async (req, res) => {
    try {
      const { vid } = req.params;
      const { time } = req.body;
  
      const deletedRecords = await WebVendorChooseTime.destroy({
        where: {
          vid: vid,
          time: time
        }
      });
  
      if (deletedRecords > 0) {
        return res.json({ message: 'Records deleted successfully for Web' });
      } else {
        return res.status(404).json({ message: 'No matching records foundfor Web' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  
  const createVendorChooseTime = async (req, res) => {
    const { vid, time } = req.body;
    try {
      const existingRecord = await WebVendorChooseTime.findOne({
        where: {
          vid: vid,
          time: time
        }
      });
  
      if (existingRecord) {
        return res.status(400).json({ error: 'Time slot already exists' });
      }
  
      const newRecord = await WebVendorChooseTime.create({ vid, time });
      return res.status(201).json(newRecord);
    } catch (error) {
      return res.status(500).json({ error: 'Error creating vendor_choose_time record: ' + error });
    }
  };
  




module.exports = {
  createWebVendorChooseTime,
  checkVidPresence,
  getall,
  deleteVendorChooseTimeByVidAndTime,
  createVendorChooseTime,
  getallForVId,
};
