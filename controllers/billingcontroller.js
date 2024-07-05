const { billing_details } = require('../models');

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;

const uploadImage = async (req, res) => {
  try {
    const {
      vid,
      VendorName,
      CompanyName,
      Address,
      pincode,
      city,
      State,
      pan_number,
      gstin_uin,   
      adress_type,
      serial_no_of_invoice // We will generate order_form_no dynamically
    } = req.body;

    let pan_proof = null;
    let gstImage = null;
    let addressProof = null;

  
    if (req.files && Object.keys(req.files).length > 0) {
     
      for (const fileKey in req.files) {
        const file = req.files[fileKey][0];
        
        if (file.size > MAX_FILE_SIZE_BYTES) {
          return res.status(400).json({ success: false, message: `File ${fileKey} exceeds the maximum allowed size of ${MAX_FILE_SIZE_BYTES} bytes` });
        }
      }
   
      pan_proof = req.files['pan_proof'] && req.files['pan_proof'].length > 0 ? req.files['pan_proof'][0].path : null;
      gstImage = req.files['gstImage'] && req.files['gstImage'].length > 0 ? req.files['gstImage'][0].path : null;
      addressProof = req.files['addressProof'] && req.files['addressProof'].length > 0 ? req.files['addressProof'][0].path : null;
    }

    const currentYear = new Date().getFullYear().toString().slice(-2);
    const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
  
    const lastRecord = await billing_details.findOne({
      order: [['createdAt', 'DESC']]
    });
    let idCount = 1;
    if (lastRecord && lastRecord.createdAt) {
      const lastRecordMonth = lastRecord.createdAt.getMonth() + 1;
      const lastRecordId = parseInt(lastRecord.serial_no_of_invoice.slice(4), 10);
      if (lastRecordMonth !== parseInt(currentMonth, 10)) {
        idCount = 1;
      } else {
        idCount = lastRecordId + 1;
      }
    }

    const paddedIdCount = idCount.toString().padStart(3, '0');
    const order_form_no = `V-${currentYear}${currentMonth}${paddedIdCount}`;

    const result = await billing_details.create({
      vid,
      VendorName,
      CompanyName,
      Address,
      pincode,
      city,
      State,
      pan_number,
      pan_proof,
      gstin_uin,
      adress_type,
      gstImage,
      addressProof,
      order_form_no,
      serial_no_of_invoice
    });

    res.json({ success: true, message: 'Billing details saved successfully', result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message || 'Failed to save billing details' });
  }
};


module.exports = {
  uploadImage
};