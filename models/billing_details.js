'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class billing_details extends Model {

    static associate(models) {
     
    }
  }
  billing_details.init({
    id:{ type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    vid: DataTypes.INTEGER,
    VendorName: DataTypes.STRING,
    CompanyName: DataTypes.STRING,
    Address: DataTypes.STRING,
    pincode: DataTypes.INTEGER,
    city: DataTypes.STRING,
    State: DataTypes.STRING,
    pan_number: DataTypes.STRING,
    pan_proof: DataTypes.STRING,
    gstin_uin: DataTypes.STRING,
    gstImage: DataTypes.STRING,
    adress_type: DataTypes.STRING,
    addressProof: DataTypes.STRING,                
    order_form_no: DataTypes.STRING,  // V-24 + mm  000 + id count   (current year )     // count ids from   month 
    serial_no_of_invoice: DataTypes.STRING,    //  2024250000 + id count                  // count ids from   year 
    create_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    create_time: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'billing_details',
    tableName: 'invoice_data',
    timestamps: false
  });
  return billing_details;
};