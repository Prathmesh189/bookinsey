'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class HelpSupport extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  HelpSupport.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message: DataTypes.STRING,
    vid: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    inquiry_date: DataTypes.DATE,
    resolve_date: DataTypes.DATE,
 
  }, {
    sequelize,
    modelName: 'HelpSupport', 
    tableName: 'help_support'
  });

  return HelpSupport;
};
