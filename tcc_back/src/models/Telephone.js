const { Model, DataTypes } = require("sequelize")

class Telephone extends Model {
  static init(connection) {
    super.init(
      {
        number: DataTypes.STRING,
        ddd: DataTypes.NUMBER,
        establishment_id: DataTypes.INTEGER
      },
      {
        sequelize: connection
      }
    )
  }

  static associate(models) {
    this.hasOne(models.Establishment)
  }
}

module.exports = Telephone