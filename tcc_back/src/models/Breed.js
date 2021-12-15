const { Model, DataTypes } = require("sequelize")

class Breed extends Model {
  static init(connection) {
    super.init(
      {
        breed: DataTypes.STRING
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

module.exports = Breed