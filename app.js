const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const { get } = require('@vercel/edge-config');

const socketLeadRouter = require('./routes/socketlead');
const category = require('./routes/category_routes');
const leads = require('./routes/leads_routes');
const services = require('./routes/service_routes');
const serviceschrgers = require('./routes/servicecharges_routes');
const time = require('./routes/time_routes');
const vendorInfo = require('./routes/vendor_info_routes');
const vendorservices = require('./routes/vendor_services_routes');
const vendortime = require('./routes/vendor_time_routes');
const choosetime = require('./routes/choose_time_router');
const banner = require('./routes/bannerRoutes');
const coverImage = require('./routes/cover_image_routes');
const logo = require('./routes/vendor_logo_routes');
const holiday = require('./routes/holiday_routes');
const packages = require('./routes/packages_routes');
const packages_details = require('./routes/package_details_routes');
const featuresAccess = require('./routes/feauturs_access');
const advertise = require('./routes/advertiseRoute');
const notifications = require('./routes/notificationroute');
const help_privacy = require('./routes/help_policy');
const qr = require('./routes/qr_code_route');
const otp = require('./routes/otpless_integration');
const billing = require('./routes/billingroutes');
const link = require('./routes/linksroutes');
const Web_choose_time = require('./routes/web_router');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
    res.send('please insert db');
  });


  



app.use('/categories', category);
app.use('/lead', leads);
app.use('/service', services);
app.use('/service_charges', serviceschrgers);
app.use('/time', time);
app.use('/vendor_info', vendorInfo);
app.use('/vendor_services', vendorservices);
app.use('/vendor_time', vendortime);
app.use('/choosetime', choosetime);
app.use('/banner', banner);
app.use('/coverImage', coverImage);
app.use('/logo', logo);
app.use('/holiday', holiday);
app.use('/packages', packages);
app.use('/packages_details', packages_details);
app.use('/featureaccess', featuresAccess);
app.use('/socket', socketLeadRouter);
app.use('/advertise', advertise);
app.use('/notifications', notifications);
app.use('/help_privacy', help_privacy);
app.use('/qr', qr);
app.use('/otp', otp);
app.use('/billing', billing);
app.use('/link', link);
app.use('/Web_choose_time', Web_choose_time);

module.exports = app;







//  // "timezone": "Asia/Calcutta"