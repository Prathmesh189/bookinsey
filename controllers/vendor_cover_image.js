const { vendor_info } = require('../models');
const path = require('path');

const updateCoverImage = async (req, res) => {
  try {
    const { id } = req.params;

    const vendor = await vendor_info.findByPk(id);
    
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file was uploaded' });
    }


    const coverImageUrl = `/uploads/coverImage/${req.file.filename}`;


    await vendor.update({ Vendor_cover_image: coverImageUrl });

    res.status(200).json({ message: 'Cover image updated successfully' });
  } catch (error) {
    console.error('Error updating cover image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const updateQRCODE = async (req, res) => {
  try {
    const { id } = req.params;

    const vendor = await vendor_info.findByPk(id);
    
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    if (!req.file) {
      return res.status(400).json({ error: 'No file was uploaded' });
    }


    const QRImageUrl = `/uploads/qrcodes/${req.file.filename}`;


    await vendor.update({ Vendor_cover_image: QRImageUrl });

    res.status(200).json({ message: 'QRImage image updated successfully' });
  } catch (error) {
    console.error('Error updating cover image:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};






module.exports = { updateCoverImage };
