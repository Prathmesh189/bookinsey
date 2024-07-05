'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendor_time extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  vendor_time.init({
    vendor_id: DataTypes.INTEGER,
    choose_time: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vendor_time',
    timestamps:false
  });
  return vendor_time;
};