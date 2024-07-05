'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('billing_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      vid: {
        type: Sequelize.INTEGER
      },
      contact_name: {
        type: Sequelize.STRING
      },
      company_name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      pin_code: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      State: {
        type: Sequelize.STRING
      },
      pan_number: {
        type: Sequelize.STRING
      },
      pan_doc_image: {
        type: Sequelize.STRING
      },
      gst_number: {
        type: Sequelize.STRING
      },
      gst_doc_image: {
        type: Sequelize.STRING
      },
      address_proof: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('billing_details');
  }
};