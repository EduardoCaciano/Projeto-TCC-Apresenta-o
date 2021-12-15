const { Model, DataTypes } = require("sequelize")

class Pet extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        animal_type_id: DataTypes.INTEGER,
        size_id: DataTypes.INTEGER,
        age: DataTypes.INTEGER,
        breed_id: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        sex_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER
      },
      {
        sequelize: connection
      }
    )
  }

  static associate(models) {
    this.hasOne(models.Animal_type)
    this.hasOne(models.Size)
    this.hasOne(models.Breed)
    this.hasOne(models.Sex)
    this.hasOne(models.User)
  }
}

module.exports = Pet