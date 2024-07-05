const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer
const { updateCoverImage   } = require('../controllers/vendor_cover_image');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/coverImage');
  },
  filename: function (req, file, cb) {
    
    const fileName = Date.now()  + file.originalname.trim();
    cb(null, fileName);
  }
});


const upload = multer({ storage: storage });


router.put('/:id', upload.single('Vendor_cover_image'), updateCoverImage);











module.exports = router;
