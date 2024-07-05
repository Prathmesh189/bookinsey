const express = require('express');
const router = express.Router();
const { getFeatureAccessByVendorId ,getAllDataByColumn } = require('../controllers/feautures_access');


router.get('/:vid', getFeatureAccessByVendorId);

router.get('/data/:columnName', getAllDataByColumn);


module.exports = router;
