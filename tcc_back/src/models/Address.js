const { Model, DataTypes } = require("sequelize")

class Address extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        number: DataTypes.INTEGER,
        cep: DataTypes.STRING,
        district: DataTypes.STRING,
        complement: DataTypes.STRING,
        city_id: DataTypes.INTEGER,
      },
      {
        sequelize: connection,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User)
    this.belongsTo(models.Establishment)
    this.hasOne(models.City)
  }
}
module.exports = Address