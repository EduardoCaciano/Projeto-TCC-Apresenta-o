const Sex = require("../models/Sex")

module.exports = {
  async index(req, res) {

    try {

      const sex = await Sex.findAll()

      return res.status(200).send({ Sex: sex })

    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  }
}