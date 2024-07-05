const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer
const { updateQRCODE   } = require('../controllers/qr_code_controller.js');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/qrcodes');
  },
  filename: function (req, file, cb) {
    
    const fileName = Date.now()  + file.originalname.trim();
    cb(null, fileName);
  }
});




const upload = multer({ storage: storage });


router.put('/:id', upload.single('qr_code'), updateQRCODE);











module.exports = router;
