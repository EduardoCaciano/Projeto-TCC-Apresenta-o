const { Model, DataTypes } = require("sequelize")

class State extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        initials: DataTypes.STRING
      },
      {
        sequelize: connection,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.City)
  }
}
module.exports = State