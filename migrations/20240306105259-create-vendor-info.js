'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vendor_info', {
      vid: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      homeService: {
        type: Sequelize.INTEGER
      },


      vendor_name: {
        type: Sequelize.STRING
      },
      vbiz: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER
      },

      Vendor_cover_image: {
        type: Sequelize.STRING
      },
      vendor_logo: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.INTEGER
      },
      Package_start_date: {
        type: Sequelize.DATE
      },
      Package_end_date: {
        type: Sequelize.DATE
      },
      package_id: {
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
    await queryInterface.dropTable('vendor_info');
  }
};