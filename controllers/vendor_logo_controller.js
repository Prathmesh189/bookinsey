const { vendor_info } = require('../models');
const path = require('path');

const updateVendorLogo = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the vendor_info record in the database
    const vendor = await vendor_info.findByPk(id);
    
    // Return 404 error if vendor not found
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    // Return 400 error if no file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No file was uploaded' });
    }

    // Construct the URL for the vendor_logo
    const logoUrl = `/uploads/logo/${req.file.filename}`;

    // Update the vendor_info record with the new vendor_logo path
    await vendor.update({ vendor_logo: logoUrl });

    // Respond with success message
    res.status(200).json({ message: 'Vendor logo updated successfully' });
  } catch (error) {
    console.error('Error updating vendor logo:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { updateVendorLogo };
