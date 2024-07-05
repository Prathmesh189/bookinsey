'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendor_time_availability extends Model {

    static associate(models) {
    
    }
  }
  vendor_time_availability.init({
 
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    status: DataTypes.STRING,
    vendor_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vendor_time_availability',
  });
  return vendor_time_availability;
};