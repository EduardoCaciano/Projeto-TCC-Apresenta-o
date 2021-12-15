const { Model, DataTypes } = require("sequelize")

class Service extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        value: DataTypes.STRING,
        name_image: DataTypes.STRING,
        path_image: DataTypes.STRING,
        description: DataTypes.STRING,
        amount: DataTypes.STRING,
        establishment_id: DataTypes.INTEGER
      },
      {
        sequelize: connection
      }
    )
  }

  static associate(models) {
    this.hasOne(models.Establishment)
    this.belongsTo(models.ConfirmationServices)
  }
}

module.exports = Service