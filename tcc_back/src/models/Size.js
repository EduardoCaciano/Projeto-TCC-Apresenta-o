const { Model, DataTypes } = require("sequelize")

class Size extends Model {
  static init(connection) {
    super.init(
      {
        size: DataTypes.STRING
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

module.exports = Size