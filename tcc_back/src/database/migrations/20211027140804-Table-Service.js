'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("services", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amount: {
        type: Sequelize.STRING,
        allowNull: true
      },
      name_image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      path_image: {
        type: Sequelize.STRING,
        allowNull: false
      },
      establishment_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "establishments",
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
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('establishments', 'establishment_id')
    queryInterface.dropTable('services')
  }
}
