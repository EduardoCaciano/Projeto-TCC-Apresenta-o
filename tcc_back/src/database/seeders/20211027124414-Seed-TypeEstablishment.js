'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('establishment_types', [
      {
        type: 'Petshop',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type: 'Clínica Veterinária',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('establishment_types', null)
  }
}
