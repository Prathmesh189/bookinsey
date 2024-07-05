// models/service.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.belongsTo(models.Category, { foreignKey: 'category_id' });
    }
  }

  Service.init({
    service_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    service_name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    // create_date: DataTypes.DATE,
    // create_time: DataTypes.TIME
  }, {
    sequelize,
    timestamps: false,
    tableName: 'services',
  });

  return Service;
};
