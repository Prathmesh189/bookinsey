'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class terms_condition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  terms_condition.init({
    id: {
      allowNull: false,
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
    },
    message: DataTypes.STRING,
    title: DataTypes.STRING,
  }, {
    sequelize,
    // modelName: 'terms_condition',
    modelName: 'terms_condition',
  });
  return terms_condition;
};