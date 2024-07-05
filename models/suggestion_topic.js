'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suggestion_topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  suggestion_topic.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    topic: DataTypes.STRING
  }, {
    sequelize,
    // tableName: 'suggestion_topic',
    modelName: 'suggestion_topic',
    timestamps:false
  });
  return suggestion_topic;
};