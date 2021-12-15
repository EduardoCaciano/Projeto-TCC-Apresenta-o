'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("establishments", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name_establishment: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      responsible_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name_image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      path_image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      address_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "addresses",
          key: "id"
        }
      },
      establishment_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "establishment_types",
          key: "id"
        }
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
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
    queryInterface.removeColumn(
      'addresses', "address_id",
      'establishment_types', 'establishmentType_id')
    queryInterface.dropTable('establishments')
  }
}
