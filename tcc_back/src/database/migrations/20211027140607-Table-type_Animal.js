'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("animal_types",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        type_animal: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
      })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("animal_types")
  }
}
