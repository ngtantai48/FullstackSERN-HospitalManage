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
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: 'admin',
      firstName: 'Nguyen',
      lastName: 'Tan Tai',
      address: 'Quy Nhon - Binh Dinh',
      phoneNumber: '0886779339',
      gender: 1,
      img: '',
      roleId: '',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Users', null, {});

  }
};
