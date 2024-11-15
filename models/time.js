'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  time.init({
    time: DataTypes.TIME,
    status: DataTypes.STRING
  }, {
    sequelize,
    timestamps:false,
    // modelName: 'time',
    tableName: 'time',
  });
  return time;
};