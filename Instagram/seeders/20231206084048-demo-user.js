'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users',
      [
          {
            "mobile_number": "mobile_number 1",
            "password": "password 1",
            "email": "email 1",
            "username": "username 1",
            "fullname": "fullname 1",
            "birthday": "2023/12/06",
            "avatar": "avatar 1",
            "bio": "bio 1"
          },
          {
            "mobile_number": "mobile_number 2",
            "password": "password 2",
            "email": "email 2",
            "username": "username 2",
            "fullname": "fullname 2",
            "birthday": "2023/12/08",
            "avatar": "avatar 2",
            "bio": "bio 2"
          }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
