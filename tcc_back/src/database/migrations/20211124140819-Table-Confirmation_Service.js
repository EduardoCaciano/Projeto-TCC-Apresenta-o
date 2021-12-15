'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("service_confirmations", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      service_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "services",
          key: "id"
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      date_request: {
        type: Sequelize.DATE,
        allowNull: false
      },
      situation: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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
    queryInterface.removeColumn('services', "service_id")
    queryInterface.removeColumn('users', "user_id")
    queryInterface.dropTable("service_confirmations")
  }
}
