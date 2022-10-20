'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //  Add seed commands here.

    await queryInterface.bulkInsert(
      'tasks',
      [
        {
          id: 1,
          description: 'Estudiar el curso de React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          description: 'Estudiar el curso de Backend',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          description: 'Estudiar el curso de SASS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // Add commands to revert seed here.

    await queryInterface.bulkDelete('tasks', null, {});
  },
};
