'use strict';

const Tasks = require('../json/tasks.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', Tasks, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', Tasks, {})
  }
};
