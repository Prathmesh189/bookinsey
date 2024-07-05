
const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingcontroller');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/documents');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()  + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Route for image uploads
router.post('/', upload.fields([
  { name: 'pan_proof', maxCount: 1 },
  { name: 'gstImage', maxCount: 1 },
  { name: 'addressProof', maxCount: 1 }
]), billingController.uploadImage);

module.exports = router;
