'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sizes', [
      {
        size: 'Pequeno',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        size: 'Médio',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        size: 'Grande',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sizes', null)
  }
}
