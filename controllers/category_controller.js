// controllers/category.controller.js
const { Category } = require('../models');

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({ message: 'Category created successfully', category });
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ message: 'Successfully retrieved categories', categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


module.exports = {
  createCategory,
  getAllCategories,
};
