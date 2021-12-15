'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sexes', [
      {
        initials: 'M',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        initials: 'F',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sexes', null)
  }
}