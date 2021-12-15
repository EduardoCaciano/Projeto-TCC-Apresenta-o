const { Model, DataTypes} = require("sequelize")

class ConfirmationServices extends Model {
  static init(connection) {
    super.init(
      {
        service_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        date_request: DataTypes.DATE,
        situation: DataTypes.BOOLEAN
      },
      {
        sequelize: connection
      }
    )
  }

  static associate(models) {
    this.hasOne(models.Service)
    this.hasOne(models.User)
  }
}

module.exports = ConfirmationServices