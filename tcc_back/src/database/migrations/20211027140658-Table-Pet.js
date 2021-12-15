'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("pets", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      animal_type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "animal_types",
          key: "id"
        }
      },
      size_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sizes",
          key: "id"
        }
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      breed_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "breeds",
          key: "id"
        }
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      sex_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sexes",
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
    queryInterface.removeColumn('sexes', "sex_id")
    queryInterface.removeColumn('users', "user_id")
    queryInterface.removeColumn('animal_types', "animal_type_id")
    queryInterface.removeColumn('sizes', "size_id")
    queryInterface.removeColumn('breeds', "breed_id")
    queryInterface.dropTable("pets")
  }
}
