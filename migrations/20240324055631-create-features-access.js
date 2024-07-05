'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('features_accesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pid: {
        type: Sequelize.INTEGER
      },
      advance_booking_indays: {
        type: Sequelize.INTEGER
      },
      history_indays: {
        type: Sequelize.INTEGER
      },
      banners: {
        type: Sequelize.INTEGER
      },
      services: {
        type: Sequelize.INTEGER
      },
      support: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('features_accesses');
  }
};