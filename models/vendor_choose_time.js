'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendor_choose_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vendor_choose_time.init({
    id:  {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true, 
    },
    vid: DataTypes.INTEGER,
    time: DataTypes.TIME
  }, {
    sequelize,
    // modelName: 'vendor_choose_time',
    tableName:'vendor_choose_time',
    timestamps:false
  });
  return vendor_choose_time;
};