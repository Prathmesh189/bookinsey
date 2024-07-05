'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class notification extends Model {
 
    static associate(models) {
   
    }
  }
  notification.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:  DataTypes.INTEGER,
    },
    category_name: DataTypes.STRING,
    forPackageOwner: DataTypes.STRING,
    message: DataTypes.STRING,
    notification_all: DataTypes.STRING
  }, {
    sequelize,
    // modelName: 'notification',
    tableName: 'notification',
  });
  return notification;
};