'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('breeds', [
      {
        breed: 'Indefinido',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        breed: 'Pastor alemão',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        breed: 'Labrador',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        breed: 'Vira lata',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        breed: 'Buldogue',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        breed: 'Persa',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        breed: 'Siamês',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        breed: 'Siberiano',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('breeds', null)
  }
}