'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_profiles', {
      user_id: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      avatar: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.INTEGER
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      active_time: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_profiles');
  }
};