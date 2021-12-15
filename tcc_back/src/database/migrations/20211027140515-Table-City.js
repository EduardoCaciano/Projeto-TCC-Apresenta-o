'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("cities", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      state_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "states",
          key: "id"
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('states', "state_id")
    queryInterface.dropTable("cities")
  }
}