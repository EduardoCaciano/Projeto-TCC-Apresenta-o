const { Model, DataTypes } = require("sequelize")

class AnimalType extends Model {
  static init(connection) {
    super.init(
      {
        type_animal: DataTypes.STRING
      },
      {
        sequelize: connection
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Pet)
  }
}

module.exports = AnimalType