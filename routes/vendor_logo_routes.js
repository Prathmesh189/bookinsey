const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { updateVendorLogo } = require('../controllers/vendor_logo_controller'); 


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/logo'); 
  },
  filename: function (req, file, cb) {
    const fileName = Date.now()  + file.originalname.trim(); 
    cb(null, fileName);
  }
});


const upload = multer({ storage: storage });


router.put('/:id', upload.single('vendor_logo'), updateVendorLogo);

module.exports = router;
