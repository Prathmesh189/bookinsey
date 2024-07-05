'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suggestion extends Model {

    static associate(models) {
      // define association here
    }
  }
  suggestion.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message: DataTypes.STRING,
    vid: DataTypes.INTEGER,
    topic_id: DataTypes.INTEGER
  }, {
    sequelize,
    // modelName: 'suggestion',
    tableName: 'suggestion',
  });
  return suggestion;
};