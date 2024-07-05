const db = require('../models');
const PackagesDetails = db.packages_details;


async function getAllPackageDetails(req, res) {
  try {
    const packageDetails = await PackagesDetails.findAll();
    res.status(200).json(packageDetails);
  } catch (error) {
    console.error('Error fetching package details:', error);
    res.status(500).json({ error: 'Internal server error' ,error  });
  }
}


async function getAllPackageDetailsbyPID(req, res) {
  const { pid } = req.query;

  try {
   
    const packageDetails = await PackagesDetails.findAll({ where: { pid: pid } });

  
    res.status(200).json(packageDetails);
  } catch (error) {
    console.error('Error fetching package details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



async function createPackageDetails(req, res) {
  const { pid, features } = req.body;
  try {
    const newPackageDetails = await PackagesDetails.create({
      pid,
      features
    });
    res.status(201).json(newPackageDetails);
  } catch (error) {
    console.error('Error creating package details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllPackageDetails,
  createPackageDetails,
  getAllPackageDetailsbyPID
  

};
