const express = require('express');
const multer = require('multer');
const path = require('path');
const advertiseController = require('../controllers/advertise');

const router = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads/advertise'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), advertiseController.uploadImage);

router.get('/' ,advertiseController.getAllAdvertises  );

module.exports = router;
