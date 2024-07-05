'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class packages extends Model {
 
    static associate(models) {
  
    } 
  }
  packages.init({
    pid:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    package_name: DataTypes.STRING,
    package_price_1yr: DataTypes.INTEGER,
    package_price_3yr: DataTypes.INTEGER,
    package_duration_1yr: DataTypes.INTEGER,
    package_duration_3yr: DataTypes.INTEGER,
    mrp_3yr: DataTypes.INTEGER,
    mrp_1yr: DataTypes.INTEGER,
    perday_1yr: DataTypes.INTEGER,
    perday_3yr: DataTypes.INTEGER,
  
  }, {
    sequelize,
    modelName: 'packages',
  });
  return packages;
};