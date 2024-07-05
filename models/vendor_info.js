'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class vendor_info extends Model {
    static associate(models) {
      vendor_info.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'Category'
      });

      vendor_info.belongsTo(models.Category, {
        foreignKey: 'sec_cat_id',
        as: 'SecondaryCategory'
      });
  
      vendor_info.belongsTo(models.Category, {
        foreignKey: 'ter_cat_id',
        as: 'ThirdCategory'
      });

      vendor_info.belongsTo(models.packages, {
        foreignKey: 'package_id', 
        as: 'Package' 
      });

    }

  }
  
  vendor_info.init({
    vid : {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
    },
    vendor_name: DataTypes.STRING,
    vbiz: DataTypes.STRING,
    location: DataTypes.STRING,
    address: DataTypes.STRING,
    homeService: DataTypes.STRING,
    email: DataTypes.STRING,
    whatsapp_number: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    show_time_rate	: DataTypes.INTEGER,
    pincode: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    sec_cat_id: DataTypes.INTEGER,
    ter_cat_id	: DataTypes.INTEGER,
    vendor_logo: DataTypes.STRING,
    qr_code: DataTypes.STRING,
    url: DataTypes.STRING,    
    Vendor_cover_image: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    package_duration: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
    Package_start_date	: DataTypes.DATE,
    Package_end_date	: DataTypes.DATE,
    package_id	: DataTypes.INTEGER,
  }, {
    sequelize,
  
    timestamps:false,
    tableName: 'vendor_info',
  });
  return vendor_info;
};