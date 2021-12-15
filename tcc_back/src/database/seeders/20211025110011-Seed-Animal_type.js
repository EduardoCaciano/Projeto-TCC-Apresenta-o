'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('animal_types', [
      {
        type_animal: 'Cachorro',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_animal: 'Gato',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_animal: 'Ave',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_animal: 'Hamster',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_animal: 'Coelho',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('animal_types', null)
  }
}