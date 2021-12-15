const { Model, DataTypes } = require("sequelize")

class EstablishmentType extends Model {
  static init(connection) {
    super.init(
      {
        type: DataTypes.STRING
      },
      {
        sequelize: connection
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Establishment)
  }
}

module.exports = EstablishmentType