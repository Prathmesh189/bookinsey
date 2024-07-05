'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class features_access extends Model {
   
    static associate(models) {
    
    }
  }
  features_access.init({
    pid: DataTypes.INTEGER,
    advance_booking_indays: DataTypes.INTEGER,
    history_indays: DataTypes.INTEGER,
    banners: DataTypes.INTEGER,
    services: DataTypes.INTEGER,
    support: DataTypes.INTEGER,
    category_count:DataTypes.INTEGER,
    url_usage:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'features_access',
  });
  return features_access;
};