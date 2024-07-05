'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendor_services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vendor_services.init({
    venndor_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    service_charges_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vendor_services',
    timestamps: false,
  });
  return vendor_services;
};