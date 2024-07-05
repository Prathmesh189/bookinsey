'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class packages_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  packages_details.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:  DataTypes.INTEGER,
    },
    pid: DataTypes.INTEGER,
    features: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'packages_details',
  });
  return packages_details;
};