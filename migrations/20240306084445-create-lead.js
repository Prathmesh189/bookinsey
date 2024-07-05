'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lead', {
      lead_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lead_name: {
        type: Sequelize.STRING
      },
      lead_status: {
        type: Sequelize.INTEGER,
      },
      vid:{
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING
      },
      lead_address: {
        type: Sequelize.STRING
      },
      contact_no: {
        type: Sequelize.TEXT
      },
      selectedServices: {
        type: Sequelize.TEXT
      },
      final_amount: {
        type: Sequelize.DECIMAL
      },
      selected_Date: {
        type: Sequelize.DATE
      },
      appointment_time: {
        type: Sequelize.TIME
      },
      create_date: {
        type: Sequelize.DATE
      },
      create_time: {
        type: Sequelize.TIME
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lead');
  }
};