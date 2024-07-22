const { vendor_info ,packages } = require('../models');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { QueryTypes } = require('sequelize');
const sequelize = require('../models').sequelize;
const { models } = require('../models');
const multer = require('multer');
const path = require('path');
const db = require('../models'); 

const VendorInfo = db.vendor_info;
const Category = db.Category;


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
      default:
        folder = 'uploads';
    }
    cb(null, path.join(__dirname, '..', 'uploads', folder)); // Adjust the path as needed
  },
  filename: function (req, file, cb) {
    const originalname = file.originalname; 
    const fileExtension = path.extname(originalname).toLowerCase();
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + uniqueSuffix + fileExtension);
  },
});



const upload = multer({ storage: storage });



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const toggleShowTimeRate = async (req, res) => {
  try {
    const vendorInfo = await vendor_info.findOne({
      where: {
        vid: req.params.vid
      }
    });

    if (!vendorInfo) {
      return res.status(404).json({ error: 'Vendor info not found' });
    }

    vendorInfo.show_time_rate = vendorInfo.show_time_rate === 0 ? 1 : 0;

    await vendorInfo.save();

    res.status(200).json({ 

      message: "Successfully Toogled",
      currentState:  vendorInfo.show_time_rate
    
    
    
    });
  } catch (error) {
    console.error('Error toggling show_time_rate:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};






// Assuming you have a function to get vendor info by vid
const getVendorInfoByIdforNotification = async (vid) => {
  try {
    const vendorInfo = await vendor_info.findByPk(vid, {
      include: [
        {
          model: packages,
          as: 'Package',
          attributes: ['package_name'],
        },
        {
          model: Category,
          as: 'Category',
          attributes: ['category_name'],
        },
      ],
    });

    // Extracting the necessary data
    const { Package, Category, ...rest } = vendorInfo.toJSON();

    return {
      vid: rest.vid,
      vendor_name: rest.vendor_name,
      vbiz: rest.vbiz,
      location: rest.location,
      address: rest.address,
      homeService: rest.homeService,
      email: rest.email,
      whatsapp_number: rest.whatsapp_number,
      state: rest.state,
      show_time_rate: rest.show_time_rate,
      pincode: rest.pincode,
      category_name: Category ? Category.category_name : null,
      package_name: Package ? Package.package_name : null,
      vendor_logo: rest.vendor_logo,
      qr_code: rest.qr_code,
      url: rest.url,
      Vendor_cover_image: rest.Vendor_cover_image,
      phone: rest.phone,
      package_duration: rest.package_duration,
      password: rest.password,
      Package_start_date: rest.Package_start_date,
      Package_end_date: rest.Package_end_date,
    };
  } catch (error) {
    console.error('Error fetching vendor info:', error);
    throw error;
  }
};






  
const checkRecordExistence = async (req, res) => {
  try {
    const { phone } = req.body;

    const vendor = await vendor_info.findOne({ where: { phone } });

    if (vendor) {
      return res.status(201).json({vendor: false });
    } 



    return res.status(201).json({ vendor: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};





async function getVendorPackageDetails(req, res) {
  const { vid } = req.params;

  try {
   
    const vendor = await vendor_info.findOne({
      where: { vid }
    });

    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

   
    const package = await packages.findByPk(vendor.package_id);

    if (!package) {
      return res.status(404).json({ error: 'Package details not found' });
    }


    const currentDate = new Date();
    const endDate = new Date(vendor.Package_end_date);
    const totalDays = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 24));

    const startDate = new Date(vendor.Package_start_date).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    });

    var totalbar ;


    if(totalDays <  365){
      totalbar  = 365;
    }else{
      totalbar  = 1100;
  
    }



   
    res.status(200).json({
      businessName: vendor.vbiz,
      Package_start_date: startDate,
      totalDays: totalbar,
      total_count: totalDays,
      package_name: package.package_name,
    });
  } catch (error) {
    console.error('Error fetching vendor package details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


const updateVendorImagesInfo = async (req, res) => {
  const { vid } = req.params;

  try {
    let vendorInfo = await vendor_info.findByPk(vid);
    if (!vendorInfo) {
      return res.status(404).json({ message: 'Vendor info not found' });
    }

    if (req.files && req.files.vendor_logo) {
      const vendor_logo = req.files.vendor_logo;
      const logoPath = path.join(__dirname, '../uploads/logo', logo.name); 
      await vendor_logo.mv(logoPath); 
      vendorInfo.vendor_logo = logoPath; 
    }

    if (req.files && req.files.Vendor_cover_image) {
      const Vendor_cover_image = req.files.Vendor_cover_image;
      const coverImagePath = path.join(__dirname, '../uploads/coverImages', Vendor_cover_image.name); 
      await Vendor_cover_image.mv(coverImagePath); 
      vendorInfo.Vendor_cover_image = coverImagePath; 
    }

  
    vendorInfo.vendor_name = req.body.vendor_name || vendorInfo.vendor_name;
    vendorInfo.vbiz = req.body.vbiz || vendorInfo.vbiz;
    vendorInfo.location = req.body.location || vendorInfo.location;


    await vendorInfo.save(); 

    res.status(200).json({ message: 'Vendor info updated successfully', vendor_info: vendorInfo });
  } catch (error) {
    console.error('Error updating vendor info:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const login = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const user = await vendor_info.findOne({ where: { phone } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const accessToken = jwt.sign({ userId: user.id ,name:user.name }, 'your-secret-key', { expiresIn: '360d' });

    res.status(200).json({
      status: true,
      userId: user.vid,
      password: user.password,
      token: accessToken,
      message: "Successfully Logged in",
    });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

const getVendorInfoById = async (req, res) => {
  const { id } = req.params;

  try {
    const vendorInfo = await sequelize.query('SELECT * FROM vendor_info WHERE vid = :id', {
      replacements: { id },
      type: QueryTypes.SELECT,
    });

    if (vendorInfo.length === 0) {
      return res.status(404).json({ message: 'Vendor info not found' });
    }

    res.status(200).json({  vendorInfo });
  } catch (error) {
    console.error('Error fetching vendor info by id:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const updateVendorInfoById = async (req, res) => {
  const { vid } = req.params;
  const { logo, vendor_name, vbiz, location, homeService,city, address,   pincode, category_id, vendor_logo, Vendor_cover_image, phone, password } = req.body;

  try {
    // Find the vendor info by vendor_id
    const vendorInfo = await vendor_info.findByPk(vid);

    if (!vendorInfo) {
      return res.status(404).json({ message: 'Vendor info not found' });
    }

    
    await vendorInfo.update({ 
      logo, 
      vendor_name, 
      vbiz, 
      location, 
      homeService,
      city, 
      address, 
      pincode, 
      category_id, 
      vendor_logo, 
      Vendor_cover_image, 
      phone, 
      password 
    });

    // Fetch the updated vendor info
    const updatedVendorInfo = await vendor_info.findByPk(vendor_id);

    res.status(200).json({ updatedVendorInfo });
  } catch (error) {
    console.error('Error updating vendor info by vendor_id:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const saveVendorDetails = async (req, res) => {
  const {
    vendor_name, vbiz,homeService, location, city, address, pincode, category_id, phone, password
  } = req.body;

  try {
    const existingVendor = await vendor_info.findOne({ where: { phone: phone } });
    if (existingVendor) {
      return res.status(409).json({ message: "Already a user, please login." });
    }

    const vendor_logo = req.files && req.files['vendor_logo'] ? path.join('profile_img', req.files['profileImgUrl'][0].filename).replace(/\\/g, '/') : null;
    const Vendor_cover_image = req.files && req.files['Vendor_cover_image'] ? path.join('uploads', 'documents', req.files['documentImage'][0].filename).replace(/\\/g, '/') : null;

    const newVendor = await vendor_info.create({
      vendor_name,
      vbiz,
      homeService,
      location,
      city,
      address,
      pincode,
      category_id,
      phone,
      password,
      vendor_logo,
      Vendor_cover_image,
    });

    res.status(201).json({
      message: "Vendor registered successfully",
      vendor: newVendor
    });
  } catch (error) {
    console.error('Error registering vendor:', error);
    res.status(500).json({ message: "Failed to register vendor", error: error });
  }
};

const createVendorInfo = async (req, res) => {
  try {
    const newVendorInfo = await vendor_info.create(req.body);
    res.status(201).json({ message: 'Vendor info created successfully', vendor_info: newVendorInfo });
  } catch (error) {
    console.error('Error creating vendor info:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

const getAllVendorInfo = async (req, res) => {
  try {
    const allVendorInfo = await vendor_info.findAll();
    res.status(200).json({ allVendorInfo });
  } catch (error) {
    console.error('Error fetching vendor info:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};


const updateVendorPackage = async (req, res) => {
    const { vid } = req.params;
    const { package_id } = req.body;
    let { Package_start_date, Package_end_date } = req.body;
  
    try {
      const vendorInfo = await vendor_info.findByPk(vid);
  
      if (!vendorInfo) {
        return res.status(404).json({ message: 'Vendor info not found' });
      }
  
   
      Package_start_date = Package_start_date || new Date().toISOString().split('T')[0];
  
      
      if (!Package_end_date || isNaN(new Date(Package_end_date))) {
        Package_end_date = '0000-00-00';
      } else {
        // Parse and format Package_end_date
        const endDateObj = new Date(Package_end_date);
        Package_end_date = endDateObj.toISOString().slice(0, 10);
      }
  
     
      const today = new Date();
      let endDate = new Date(Package_end_date);
      if (isNaN(endDate) || today > endDate) {
        endDate = new Date(today.setDate(today.getDate() + 360));
      } else {
        const remainingDays = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
        endDate = new Date(endDate.setDate(endDate.getDate() + remainingDays + 360));
      }
  
      await vendorInfo.update({ package_id, Package_end_date: endDate.toISOString().split('T')[0], Package_start_date });
  
      const updatedVendorInfo = await vendor_info.findByPk(vid);
  
      res.status(200).json({ updatedVendorInfo });
    } catch (error) {
      console.error('Error updating vendor info by vendor_id:', error);
      res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  };
  
const extendPackageEndDate = async (req, res) => {
  const { vid } = req.params;

  try {
  
    const vendorInfo = await vendor_info.findByPk(vid);

    if (!vendorInfo) {
      return res.status(404).json({ message: 'Vendor info not found' });
    }

    // Get the current package end date
    let { Package_end_date } = vendorInfo;
    
    // If Package_end_date is '0000-00-00', set it to today's date
    if (Package_end_date === '0000-00-00') {
      Package_end_date = new Date().toISOString().split('T')[0];
    }

    // Parse the end date and add 360 days
    const endDateObj = new Date(Package_end_date);
    endDateObj.setDate(endDateObj.getDate() + 360);

    // Update the vendor's package end date
    await vendorInfo.update({ Package_end_date: endDateObj.toISOString().split('T')[0] });

    // Fetch the updated vendor info
    const updatedVendorInfo = await vendor_info.findByPk(vid);

    res.status(200).json({ updatedVendorInfo });
  } catch (error) {
    console.error('Error extending package end date by vendor_id:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};



const getPackageEndDate = async (req, res) => {
  const { vid } = req.params;

  try {
    // Find the vendor info by vendor_id
    const vendorInfo = await vendor_info.findByPk(vid);

    if (!vendorInfo) {
      return res.status(404).json({ message: 'Vendor info not found' });
    }

    // Return the package end date
    res.status(200).json({ vid: vendorInfo.vid, Package_end_date: vendorInfo.Package_end_date });
  } catch (error) {
    console.error('Error retrieving package end date by vendor_id:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};






const updatePackageIfNeeded = async (req, res) => {
  const { vid } = req.params;

  try {
  
    const vendor = await vendor_info.findByPk(vid);
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

   
    const currentDate = new Date();

    
    let remainingDays = 0;
    if (vendor.Package_end_date !== '0000-00-00') {
      const endDate = new Date(vendor.Package_end_date);
      remainingDays = Math.ceil((endDate - currentDate) / (1000 * 60 * 60 * 18));
    }

   
    const newEndDate = new Date(currentDate);
    newEndDate.setDate(newEndDate.getDate() + (remainingDays <= 0 ? 360 : remainingDays + 360));

  
    await vendor.update({ Package_end_date: newEndDate });

    return res.status(200).json({ message: 'Package extended successfully' });
  } catch (error) {
    console.error('Error updating package:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};



const addOrEditSecCategoryId = async (req, res) => {
  try {
    const { vid } = req.params;
    const { sec_cat_id } = req.body;

    const vendor = await vendor_info.findByPk(vid);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    if (vendor.sec_cat_id === 0) {
      vendor.sec_cat_id = sec_cat_id;
    } else {
      vendor.ter_cat_id = sec_cat_id;
    }


    await vendor.save();

    return res.status(200).json({ message: 'sec_cat_id or ter_cat_id updated successfully',
    second: vendor.sec_cat_id,
    third: vendor.ter_cat_id,
    visible:vendor.show_time_rate,

     vendor });
  } catch (error) {
    console.error('Error adding or editing sec_cat_id:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


const getDetailsForCat = async (req, res) => {
  try {
    const { vid } = req.params;

    const vendor = await vendor_info.findByPk(vid);
    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }




    return res.status(200).json({ message: 'sec_cat_id or ter_cat_id fetched successfully',
    first: vendor.category_id,
    second: vendor.sec_cat_id,
    third: vendor.ter_cat_id,
    visible:vendor.show_time_rate,

     vendor });
  } catch (error) {
    console.error('Error adding or editing sec_cat_id:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};




const getPackageDuration = async (req, res) => {
  try {
    const { vid } = req.params;
    const vendorInfo = await VendorInfo.findByPk(vid);

    if (!vendorInfo) {
      return res.status(404).json({ message: 'Vendor info not found' });
    }

    const { package_duration, package_id } = vendorInfo;
    return res.status(200).json({ package_duration, package_id });
  } catch (error) {
    console.error('Error fetching package duration:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};






const getVendorInfoWithCategoriesById = async (req, res) => {
  const { vid } = req.params;

  try {
    const vendorInfo = await VendorInfo.findByPk(vid, {
      attributes: ['category_id', 'sec_cat_id', 'ter_cat_id'], 
      include: [
        {
          model: Category,
          as: 'Category',
          attributes: ['category_name'],
          required: false 
        },
        {
          model: Category,
          as: 'SecondaryCategory',
          attributes: ['category_name'],
          required: false
        },
        {
          model: Category,
          as: 'ThirdCategory',
          attributes: ['category_name'],
          required: false
        }
      ]
    });

    if (!vendorInfo) {
      return res.status(404).json({ error: 'Vendor info not found' });
    }

    const response = {
      category_id: vendorInfo.category_id,
      sec_cat_id: vendorInfo.sec_cat_id,
      ter_cat_id: vendorInfo.ter_cat_id,
      category_name: vendorInfo.Category ? vendorInfo.Category.category_name : null,
      secondary_category_name: vendorInfo.SecondaryCategory ? vendorInfo.SecondaryCategory.category_name :"empty",
      third_category_name: vendorInfo.ThirdCategory ? vendorInfo.ThirdCategory.category_name :"empty",
      // third_category_name: vendorInfo.ter_cat_id ? "empty" : null
    };

    res.json(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const editPassword = async (req, res) => {
  try {
    const { phone } = req.params;

    const vendor = await vendor_info.findOne({
      where: { phone: phone }
    });

    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    const { password } = req.body;

    await vendor.update({ password: password });

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};




const setVendorUrl = async (req, res) => {
  try {
    const { vid } = req.params;

    const vendor = await vendor_info.findOne({
      where: { vid: vid }
    });

    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    const { url } = req.body;

    await vendor.update({ url: url });

    return res.status(200).json({ message: 'New URl Created SuccessFully updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};






module.exports = {


  createVendorInfo,
  getAllVendorInfo,
  getVendorInfoById,
  login ,
  updateVendorInfoById ,
  updateVendorImagesInfo,
  saveVendorDetails,
  getVendorPackageDetails,
  updateVendorPackage,
  updatePackageIfNeeded,
  extendPackageEndDate,
  getPackageEndDate,
  addOrEditSecCategoryId,
  getDetailsForCat,
  getVendorInfoWithCategoriesById,
  toggleShowTimeRate,
  checkRecordExistence,

  getPackageDuration,
  editPassword,
  setVendorUrl,


  getVendorInfoByIdforNotification


};

