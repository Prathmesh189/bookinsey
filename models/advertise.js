'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class advertise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  advertise.init({
    id:{ type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image: DataTypes.STRING,
    heading: DataTypes.STRING
  }, {
    sequelize,
    // modelName: 'advertise',
    tableName:"advertise"
    //
  });
  return advertise;
};