const { Model, DataTypes } = require("sequelize")

class Establishment extends Model {
  static init(connection) {
    super.init(
      {
        name_establishment: DataTypes.STRING,
        responsible_name: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        password: DataTypes.STRING,
        name_image: DataTypes.STRING,
        path_image: DataTypes.STRING,
        email: DataTypes.STRING,
        address_id: DataTypes.INTEGER,
        establishmentType_id: DataTypes.INTEGER,
        deleted: DataTypes.BOOLEAN,
      },
      {
        sequelize: connection
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Service)
    this.belongsTo(models.Telephone)
    this.hasOne(models.Address)
    this.hasOne(models.EstablishmentType)
  }
}

module.exports = Establishment