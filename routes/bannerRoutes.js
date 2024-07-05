const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const bannerController = require('../controllers/bannerController');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/banners');
  },
  filename: function (req, file, cb) {
    cb(null, + Date.now() +path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/:vid', upload.single('image'), bannerController.createBanner);
router.put('/:id/:vid', upload.single('image'), bannerController.updateBanner);
router.delete('/:id/:vid', bannerController.deleteBanner);
router.get('/vendor/:vid', bannerController.getBannersByVendorId);
router.get('/all/:vid', bannerController.getAllBannersByVendorId);


module.exports = router;
