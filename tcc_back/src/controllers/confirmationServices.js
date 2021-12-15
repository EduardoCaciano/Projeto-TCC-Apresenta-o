const ConfirmationServices = require('../models/ConfirmationServices')
const User = require("../models/User")
const Service = require("../models/Service")

module.exports = {
  async index(req, res) {

  },

  async store(req, res) {

    const { services_id } = req.body

    const { userId } = req

    try {

      const user = await User.findOne({
        where: {
          id: userId
        }
      })

      if (!user) return res.status(400).send({ Error: "Usuario não encontrado" })
      
      const services = await Service.findOne({
        where: {
          id: services_id
        }
      })
     
      if (!services) return res.status(400).send({ Error: "Serviço não encontrado" })

      const confirmation = await ConfirmationServices.create({
        service_id: services.id,
        user_id: user.id,
        situation: true
      })

      return res.status(200).send()

    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  }
}