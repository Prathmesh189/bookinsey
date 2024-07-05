
const { Service, sequelize } = require('../models'); 


const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json({ message: 'Service created successfully', service });
  } catch (error) {
    console.error('Error creating service:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const getAllServicesByCategoryId = async (req, res) => {
  const categoryId = req.params.category_id;
  
  try {
    const services = await Service.findAll({
      where: { category_id: categoryId },
      attributes: [
        [sequelize.fn('DISTINCT', sequelize.col('service_id')), 'service_id'],
        'service_name' // Include other attributes you want to fetch
      ]
    });
    res.status(200).json({ message: 'Successfully retrieved distinct services by service_id for category ' + categoryId, services });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json({ message: 'Successfully retrieved services', services });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = {
  createService,
  getAllServices,
  getAllServicesByCategoryId
};
