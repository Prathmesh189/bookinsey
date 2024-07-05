const db = require('../models');
const Notification = db.notification; // Assuming you have defined the Notification model in your models directory

// Controller function to fetch vendor information by ID
const getVendorInfo = async (req, res) => {
  const { vid } = req.params;
  
  try {
    const vendor = await db.vendor_info.findOne({
      where: { vid },
      include: [
        {
          model: db.Category,
          as: 'Category',
          attributes: ['category_name'],
        },
        {
          model: db.packages,
          as: 'Package', 
          attributes: ['package_name'], 
        },
      ],
    });
    res.status(200).json({ message: 'Vendor information fetched successfully', data: vendor });
  } catch (error) {
    console.error('Error fetching vendor information:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Controller function to fetch notifications
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.status(200).json({ message: 'Notifications fetched successfully', notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Controller function to fetch notifications based on package name and category name
const getNotificationsByParams = async (req, res) => {
  try {
    const { packageName, category_name } = req.params;
    let notifications;

    if (packageName && category_name) {
      notifications = await Notification.findAll({
        where: {
          category_name: category_name,
          forPackageOwner: packageName
        }
      });
    } else if (packageName) {
      notifications = await Notification.findAll({
        where: { forPackageOwner: packageName }
      });
    } else if (category_name) {
      notifications = await Notification.findAll({
        where: { categoryName: category_name }
      });
    } else {
      notifications = await Notification.findAll();
    }

    res.status(200).json({ message: 'Notifications fetched successfully', notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = {
  getVendorInfo,
  getNotifications,
  getNotificationsByParams
};
