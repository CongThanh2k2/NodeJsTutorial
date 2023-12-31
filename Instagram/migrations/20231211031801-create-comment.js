'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      created_user_id: {
        type: Sequelize.STRING
      },
      post_id: {
        type: Sequelize.STRING
      },
      created_time: {
        type: Sequelize.DATE
      },
      reaction_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      reply_comment_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      comment: {
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
    await queryInterface.dropTable('Comments');
  }
};