'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      created_user_id: {
        type: Sequelize.STRING
      },
      post_type: {
        type: Sequelize.STRING
      },
      created_time: {
        type: Sequelize.DATE
      },
      caption: {
        type: Sequelize.STRING
      },
      x_location: {
        type: Sequelize.STRING
      },
      y_location: {
        type: Sequelize.STRING
      },
      name_location: {
        type: Sequelize.STRING
      },
      reaction_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      comment_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      commenting: {
        type: Sequelize.BOOLEAN
      },
      hide_like_and_view_counts: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Posts');
  }
};