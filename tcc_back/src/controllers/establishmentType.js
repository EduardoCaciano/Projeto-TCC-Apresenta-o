const EstablishmentType = require("../models/EstablishmentType")

module.exports = {
  async index(req, res) {

    try {

      const establishmentType = await EstablishmentType.findAll()

      return res.status(200).send(establishmentType)

    } catch (error) {
      console.log(error);
      return res.status(500).send({ Error: error });
    }
  }
}