const { where } = require('sequelize');
const db = require('../models');
const Packages = db.packages;



async function getAllPackages(req, res) {
  try {
    const packages = await Packages.findAll();
    res.status(200).json(packages);
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


async function createPackage(req, res) {
  const { package_name, package_price, package_duration_in_days } = req.body;
  try {
    const newPackage = await Packages.create({
      package_name,
      package_price,
      package_duration_in_days
    });
    res.status(201).json(newPackage);
  } catch (error) {
    console.error('Error creating package:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getPackagePrices(req, res) {
  const { pid } = req.params;
  try {
    const package = await Packages.findOne({
      where: { pid }, 
      attributes: ['package_price_1yr', 'package_price_3yr','mrp_1yr','mrp_3yr'    ]
    });

    if (package) {
      const { package_price_1yr,package_price_3yr,mrp_1yr,mrp_3yr } = package;
      res.json({ package_price_1yr, package_price_3yr,mrp_1yr,mrp_3yr });
    } else {
      res.status(404).json({ error: 'Package with the provided pid not found' });
    }
  } catch (error) {
    console.error('Error fetching package prices:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



const getPerDayRate = async (req, res) => {
  const { pid, duration } = req.params;
  let perDayRate;

  try {
    const packageData = await Packages.findOne({
      where: { pid: pid },
      attributes: duration === '1' ? ['perday_1yr'] : ['perday_3yr'],
    });

    if (packageData) {
      perDayRate = duration === '1' ? packageData.perday_1yr : packageData.perday_3yr;
      res.status(200).json({ perDayRate });
    } else {
      res.status(404).json({ error: 'Package not found' });
    }
  } catch (error) {
    console.error('Error fetching package data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const getPackagesPerDay = async (req, res) => {
  const { pid, duration } = req.query;

  try {
    const perDay = await db.packages.getPerDay(pid, duration);
    res.json({ perDay });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports = {
  getAllPackages,
  createPackage,
  getPackagePrices,
  getPerDayRate,



getPackagesPerDay




};
