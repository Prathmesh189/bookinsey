const express = require('express');
const vendorInfoController = require('../controllers/vendor_info_controler');
const { vendor_info } = require('../models');

const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let folder;
      switch (file.fieldname) {
        case 'vendor_logo':
          folder = 'logo';
          break;
        case 'Vendor_cover_image':
          folder = 'coverImage';
          break;
        case 'logo':
          folder = 'logo';
          break;
        default:
          folder = 'uploads';
      }
      cb(null, path.join('uploads', folder));
    },
    filename: function (req, file, cb) {
      const originalname = file.originalname; 
      const fileExtension = path.extname(originalname).toLowerCase();
  
      const uniqueSuffix = Date.now()  + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + uniqueSuffix + fileExtension);
    },
  });
  
  const upload = multer({ storage: storage });
  




router.post('/new/', upload.fields([
  { name: 'profileImgUrl', maxCount: 1 },
  { name: 'documentImage', maxCount: 1 },
  { name: 'licenseImage', maxCount: 1 },
]), vendorInfoController.createVendorInfo);



router.patch('/:vendor_id/logo', async (req, res) => {
  const { vendor_id } = req.params;

  try {
    const vendorInfo = await vendor_info.findByPk(vendor_id);

    if (!vendorInfo) {
      return res.status(404).json({ message: 'Vendor info not found' });
    }

    // Handle logo upload
    uploadLogo(req, res, async function (err) {
      if (err) {
        console.error('Error uploading logo:', err);
        return res.status(500).json({ message: 'Error uploading logo', error: err.message });
      }
      if (!req.file) {
        return res.status(400).json({ message: 'No logo file uploaded' });
      }

      vendorInfo.logo = req.file.path;
      await vendorInfo.save();

      res.status(200).json({ message: 'Logo updated successfully', vendor_info: vendorInfo });
    });
  } catch (error) {
    console.error('Error updating logo for vendor:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

router.get("/subdata/:vid",vendorInfoController.getVendorPackageDetails     )

router.post('/', vendorInfoController.createVendorInfo);

router.get('/', vendorInfoController.getAllVendorInfo);

router.post('/login', vendorInfoController.login);

router.get('/:id', vendorInfoController.getVendorInfoById); 

router.post('/checkDuplicate', vendorInfoController.checkRecordExistence);

router.patch('/:vendor_id', upload.fields([]), async (req, res) => {
    const { vendor_id } = req.params;
    const { logo, vendor_name, vendor_business_name,whatsapp_number ,email, sec_cat_id,  ter_cat_id,  state, location, city, address, pincode, category_id, phone, password } = req.body;
  
    try {
      const vendorInfo = await vendor_info.findByPk(vendor_id);
  
      if (!vendorInfo) {
        return res.status(404).json({ message: 'Vendor info not found' });
      }
  
      await vendorInfo.update({ 
        logo, 
        vendor_name, 
        vendor_business_name, 
        ter_cat_id,
        email, 
        state, 
        whatsapp_number,
        location, 
        city, 
        sec_cat_id,
        address, 
        pincode, 
        category_id, 
        phone, 
        password 
      });
      
      const updatedVendorInfo = await vendor_info.findByPk(vendor_id);
  
      res.status(200).json({ updatedVendorInfo });
    } catch (error) {
      console.error('Error updating vendor info by vendor_id:', error);
      res.status(500).json({ message: 'Something went wrong', error: error.message }); }  });
      
  
  router.patch('/recharge/:vendor_id', upload.fields([]), async (req, res) => {
    const { vendor_id } = req.params;
    const { 
      Package_end_date,
      Package_start_date,
      package_id,
      package_duration

    } = req.body;
  
    try {
      const vendorInfo = await vendor_info.findByPk(vendor_id);

      if (!vendorInfo) {
        return res.status(404).json({ message: 'Vendor info not found' });
      }

      await vendorInfo.update({ 
        Package_end_date,
        Package_start_date,
        package_id,
        package_duration
      });
      
      const updatedVendorInfo = await vendor_info.findByPk(vendor_id);
  
      res.status(200).json({ updatedVendorInfo });
    } catch (error) {
      console.error('Error updating vendor info by vendor_id:', error);
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  });
  

  router.put('/package/:vid', vendorInfoController.updateVendorPackage);

  router.put('/extend/:vid', vendorInfoController.extendPackageEndDate);

  router.put('/sub/:vid', vendorInfoController.updatePackageIfNeeded);

  router.get("/enddate/:vid" ,vendorInfoController.getPackageEndDate  );


  const logoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/logo');
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}${ext}`);
    }
  });
  
  const uploadLogo = multer({ storage: logoStorage }).single('logo');
  
  
  const coverImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/coverImage');
    },
    filename: function (req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, `${Date.now()}${ext}`);
    }
  });
  
  const uploadCoverImage = multer({ storage: coverImageStorage }).single('Vendor_cover_image');
  
  router.patch('/images/:vendor_id', async (req, res) => {
    const { vendor_id } = req.params;
    const { type } = req.query;
  
    try {
      const vendorInfo = await vendor_info.findByPk(vendor_id);
  
      if (!vendorInfo) {
        return res.status(404).json({ message: 'Vendor info not found' });
      }
  
      
      if (type === 'logo') {
        uploadLogo(req, res, async function (err) {
          if (err) {
            console.error('Error uploading logo:', err);
            return res.status(500).json({ message: 'Error uploading logo', error: err.message });
          }
          if (!req.file) {
            return res.status(400).json({ message: 'No logo file uploaded' });
          }
  
          vendorInfo.logo = req.file.path;
          await vendorInfo.save();
  
      
          const logoUrl = req.protocol + '://' + req.get('host') + '/' + req.file.path;
          vendorInfo.logo = logoUrl;
  
          res.status(200).json({ message: 'Logo updated successfully', vendor_info: vendorInfo });
        });
      } else if (type === 'Vendor_cover_image') {
        uploadCoverImage(req, res, async function (err) {
          if (err) {
            console.error('Error uploading cover image:', err);
            return res.status(500).json({ message: 'Error uploading cover image', error: err.message });
          }
          if (!req.file) {
            return res.status(400).json({ message: 'No cover image file uploaded' });
          }
  
          vendorInfo.Vendor_cover_image = req.file.path;
          await vendorInfo.save();
  
          // Include the URL of the uploaded cover image in the response
          const coverImageUrl = req.protocol + '://' + req.get('host') + '/' + req.file.path;
          vendorInfo.Vendor_cover_image = coverImageUrl;
  
          res.status(200).json({ message: 'Cover image updated successfully', vendor_info: vendorInfo });
        });
      } else {
        return res.status(400).json({ message: 'Invalid type parameter' });
      }
    } catch (error) {
      console.error('Error updating vendor info:', error);
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  });


router.put('/chngePassword/:phone'  , vendorInfoController.editPassword    );

  router.put('/addCat/:vid/', vendorInfoController.addOrEditSecCategoryId);

  router.get('/getDetailsForService/:vid/', vendorInfoController.getDetailsForCat);

  router.get('/duration/:vid/', vendorInfoController.getPackageDuration);


  router.get('/getcats/:vid', vendorInfoController.getVendorInfoWithCategoriesById);


  router.get('/noti/:vid', vendorInfoController.getVendorInfoByIdforNotification);


  router.put('/togglePriceandTime/:vid', vendorInfoController.toggleShowTimeRate);

router.put('/url/:vid', vendorInfoController.setVendorUrl);

  
module.exports = router;
