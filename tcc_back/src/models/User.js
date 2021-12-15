const { Model, DataTypes } = require("sequelize")

class User extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        birth_date: DataTypes.DATE,
        telephone: DataTypes.STRING,
        cpf: DataTypes.STRING,
        deleted: DataTypes.BOOLEAN,
        address_id: DataTypes.INTEGER
      },
      {
        sequelize: connection,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Pet)
    this.belongsTo(models.ConfirmationServices)
    this.hasOne(models.Address)
  }
}
module.exports = User