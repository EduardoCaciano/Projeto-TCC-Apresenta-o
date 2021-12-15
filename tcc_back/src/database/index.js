const Sequelize = require("sequelize")
const dbConfig = require("../config/database")

const User = require("../models/User")
const Pet = require("../models/Pet")
const State = require("../models/State")
const City = require("../models/City")
const Address = require("../models/Address")
const AnimalType = require("../models/Animal_type")
const Breed = require("../models/Breed")
const Sex = require("../models/Sex")
const Size = require("../models/Size")
const Establishment = require("../models/Establishment")
const EstablishmentType = require("../models/EstablishmentType")
const Service = require("../models/Service")
const Telephone = require("../models/Telephone")

const connection = new Sequelize(dbConfig.url, dbConfig.config)

const returnConnection = connection ? "🔥Successfully created connection with database🔥" : "😥unsuccessfully created connection with database😥"
console.log(returnConnection)

User.init(connection)
Pet.init(connection)
State.init(connection)
City.init(connection)
Address.init(connection)
AnimalType.init(connection)
Breed.init(connection)
Sex.init(connection)
Size.init(connection)
Establishment.init(connection)
EstablishmentType.init(connection)
Service.init(connection)
Telephone.init(connection)

module.exports = connection