// models/category.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Service, { foreignKey: 'category_id' });
    }
  }

  Category.init({
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    // create_date: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW
    // },
    // create_time: {
    //   type: DataTypes.TIME,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW
    // }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'category',
    timestamps: false
  });

  return Category;
};
