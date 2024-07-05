'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lead extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Lead.init({
    lead_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    vid : {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    lead_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },

    contact_no: {
      type: DataTypes.TEXT,
      allowNull: false
    },


    appointment_time: {
      type: DataTypes.TIME,
      allowNull: true 
    },

    email: {
      type: DataTypes.STRING(222),
      allowNull: false
    },
    lead_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
 
    selectedServices: {
      type: DataTypes.TEXT,
      allowNull: false
    },
 
    lead_address : {
      type: DataTypes.STRING(222),
      allowNull: true
    },

  
    final_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    selected_Date: {
      type: DataTypes.STRING,
      
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
    // modelName: 'Lead',
    timestamps: false,
    tableName: 'lead',
    

  });

  return Lead;
};
