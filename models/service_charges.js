'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service_charges extends Model {
  
    static associate(models) {
      service_charges.belongsTo(models.Service, { foreignKey: 'service_id' }); 
      service_charges.belongsTo(models.Category, { foreignKey: 'category_id' }); 
    }
  }
  service_charges.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    vid: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER,
    charges2: DataTypes.DECIMAL,
    time_taken: DataTypes.STRING,
    // create_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'service_charges',
    timestamps:false
  });
  return service_charges;
};