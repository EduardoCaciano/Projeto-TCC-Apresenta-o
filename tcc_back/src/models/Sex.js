const { Model, DataTypes } = require("sequelize")

class Sex extends Model {
  static init(connection) {
    super.init(
      {
        initials: DataTypes.CHAR,
      },
      {
        sequelize: connection,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Pet)
  }
}
module.exports = Sex