// routes/category.routes.js
const express = require('express');
const categoryController = require('../controllers/category_controller');


const router = express.Router();

// Create a new category
router.post('/', categoryController.createCategory);

// Get all categories
router.get('/', categoryController.getAllCategories);

// Other CRUD routes can be added as needed

module.exports = router;
