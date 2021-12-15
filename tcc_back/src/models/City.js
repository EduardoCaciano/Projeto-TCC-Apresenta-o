const { Model, DataTypes } = require("sequelize")

class City extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        state_id: DataTypes.INTEGER,

      },
      {
        sequelize: connection,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Address)
    this.hasOne(models.State)
  }
}
module.exports = City