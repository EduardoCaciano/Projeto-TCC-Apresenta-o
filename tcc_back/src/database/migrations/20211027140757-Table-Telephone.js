'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("telephones", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ddd: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      number: {
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
    queryInterface.dropTable('telephones')
  }
}
