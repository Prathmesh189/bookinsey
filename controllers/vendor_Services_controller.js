// controllers/vendorServices.controller.js

const { vendor_services } = require('../models');

const createVendorService = async (req, res) => {
  try {
    const { vid, category_id, service_id, charges2, time_taken, create_date } = req.body;

    // Create the vendor service
    const newVendorService = await vendor_services.create({
      vid,
      category_id,
      service_id,
      charges2,
      time_taken,
      create_date
    });

    res.status(201).json({ message: 'Vendor service created successfully', vendor_service: newVendorService });
  } catch (error) {
    console.error('Error creating vendor service:', error);
    res.status(500).json({ message: 'Failed to create vendor service', error: error.message });
  }
};



const getAllVendorServices = async (req, res) => {
  try {
    const vendorServices = await vendor_services.findAll(); 
    res.status(200).json({ message: 'Successfully retrieved vendor services', vendor_services: vendorServices });
  } catch (error) {
    console.error('Error fetching vendor services:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const getAllVendorServicesByVid = async (req, res) => {
  try {
    const { vid } = req.params;
    const vendorServices = await vendor_services.findAll({ where: { vid } }); 
    res.status(200).json({ message: `Successfully retrieved vendor services for vendor ID ${vid}`, vendor_services: vendorServices });
  } catch (error) {
    console.error('Error fetching vendor services by vendor ID:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};



module.exports = {
  createVendorService,
  getAllVendorServices,
  getAllVendorServicesByVid
};

