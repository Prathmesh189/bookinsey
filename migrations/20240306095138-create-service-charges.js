'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('service_charges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vid: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      service_id: {
        type: Sequelize.INTEGER
      },
      charges2: {
        type: Sequelize.DECIMAL
      },
      time_taken: {
        type: Sequelize.STRING
      },
      create_date: {
        type: Sequelize.DATE
      }
   
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('service_charges');
  }
};