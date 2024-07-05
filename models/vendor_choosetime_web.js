'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendor_choosetime_web extends Model {
    static associate(models) {
    }
  }
  vendor_choosetime_web.init({
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
    },

    vid: DataTypes.INTEGER,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'vendor_choosetime_web',
  });
  return vendor_choosetime_web;
};