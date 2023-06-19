'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
               {
                name: 'John Doe'
               },
               {
                name: 'Jane Smith'
               },
               {
                name: 'Bob Johnson'
               },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

// { id: 1, name: 'John Doe' },
// { id: 2, name: 'Jane Smith' },
// { id: 3, name: 'Bob Johnson' }