'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Holiday extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Holiday.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullday_holiday: DataTypes.STRING,
    vid: DataTypes.INTEGER,
    date: DataTypes.STRING,
    status: DataTypes.STRING,
    time: DataTypes.TIME
  }, {
    sequelize,
    // modelName: 'Holiday',
    tableName: "holiday"
  });
  return Holiday;
};