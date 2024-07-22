const db = require('../models'); 

const path = require('path');








const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const imagePath = '/uploads/advertise/' + req.file.filename;
    const newAdvertise = await db.advertise.create({ image: imagePath });

    res.status(201).json({ message: 'Image uploaded successfully', data: newAdvertise });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

const getAllAdvertises = async (req, res) => {
    try {
      const advertises = await db.advertise.findAll();
      res.status(200).json({ message: 'Advertises fetched successfully', advertises_List: advertises });
    } catch (error) {
      console.error('Error fetching advertises:', error);
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  };
  



module.exports = {
    getAllAdvertises,
  uploadImage
};
