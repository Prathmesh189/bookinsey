const { service_charges, Service, Category } = require('../models'); 


const createServiceCharge = async (req, res) => {
  try {
  
    const existingServiceCharge = await service_charges.findOne({ where: { vid: req.body.vid, service_id: req.body.service_id } });
    if (existingServiceCharge) {
  
      return res.status(400).json({ message: 'Vendor already has a service charge with the same service ID' });
    }

    const newServiceCharge = await service_charges.create(req.body); 
    res.status(201).json({ message: 'Service charge created successfully', service_charge: newServiceCharge });
  } catch (error) {
    console.error('Error creating service charge:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const getAllServiceCharges = async (req, res) => {
  try {
    const serviceCharges = await service_charges.findAll({
      include: [Service, Category] 
    });
    res.status(200).json({ message: 'Successfully retrieved service charges', service_charges: serviceCharges });
  } catch (error) {
    console.error('Error fetching service charges:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const getAllServiceChargesByVid = async (req, res) => {
  try {
    const { vid ,category_id  } = req.params;
    const serviceCharges = await service_charges.findAll({
      include: [Service, Category] ,
      where: { vid,category_id }
    });
    res.status(200).json({ message: `Successfully retrieved service charges for vendor ID ${vid}`, service_charges: serviceCharges });
  } catch (error) {
    console.error('Error fetching service charges by vendor ID:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const editServiceCharge = async (req, res) => {
  const { id } = req.params;

  try {
    const serviceCharge = await service_charges.findByPk(id);

    if (!serviceCharge) {
      return res.status(404).json({ message: 'Service charge not found' });
    }

    await serviceCharge.update(req.body);

    res.status(200).json({ message: 'Service charge updated successfully' });
  } catch (error) {
    console.error('Error updating service charge:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const countServiceCharges = async (req, res) => {
  const { vid } = req.params;

  try {
    const serviceChargeCount = await service_charges.count({ where: { vid } });



    res.status(200).json({ serviceChargeCount });
  } catch (error) {
    console.error('Error counting service charges:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const deleteServiceChargeAll = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedServiceCharge = await service_charges.destroy({
      where: { id: id }
    });
    if (deletedServiceCharge === 1) {
      res.status(200).json({ message: 'Service charge deleted successfully' });
    } else {
      res.status(404).json({ message: 'Service charge not found' });
    }
  } catch (error) {
    console.error('Error deleting service charge:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }


  
};

const deleteServiceCharge = async (req, res) => {
  const { service_id  ,vid  } = req.params;
  try {
    const deletedServiceCharge = await service_charges.destroy({
      where: { service_id: service_id  ,vid:vid }
    });
    if (deletedServiceCharge === 1) {
      res.status(200).json({ message: 'Service charge deleted successfully' });
    } else {
      res.status(404).json({ message: 'Service charge not found' });
    }
  } catch (error) {
    console.error('Error deleting service charge:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }


  
};


module.exports = {
  createServiceCharge,
  getAllServiceCharges,
  getAllServiceChargesByVid,
  deleteServiceCharge,
  deleteServiceChargeAll,
  editServiceCharge,
  countServiceCharges
};
