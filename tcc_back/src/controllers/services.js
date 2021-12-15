const Service = require("../models/Service")
const Establishment = require("../models/Establishment")
const fs = require('fs')

module.exports = {
  async index(req, res) {

    const { userId } = req

    try {

      const services = await Service.findAll({
        where: {
          establishment_id: userId
        }
      })

      return res.status(200).send(services)

    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async indexMobile(req, res) {

    try {

      const services = await Service.findAll()

      return res.status(200).send({ Services: services })

    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async store(req, res) {
    const {
      name,
      value,
      amount,
      description } = req.body

    const { userId } = req

    try {

      const establishment = await Establishment.findByPk(userId)

      if (!establishment) return res.status(400).send({ error: `Estabelecimento não existente!` })
      
      if (!req.file) return res.status(404).send('Erro imagem não encontrada')

      const { firebaseUrl } = req.file

      const services = await Service.create({
        name: name,
        description: description,
        value: value,
        path_image: firebaseUrl,
        amount: amount,
        establishment_id: establishment.id
      })

      return res.status(201).send({ Services: services })

    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async update(req, res) {

    const {
      id,
      name,
      description,
      value,
      amount } = req.body

    const { userId } = req

    try {

      const services = await Service.findOne({
        where: {
          id: id,
          establishment_id: userId
        }
      })

      if (!services) return res.status(404).send({ Error: "Serviço/Produto não encontrado" })

      await Service.update({
        name: name,
        description: description,
        value: value,
        amount: amount
      },
        {
          where: {
            id: id,
          }
        }
      )
      return res.status(200).send({ Success: "Atualizado com sucesso" })
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async delete(req, res) {

    const { id } = req.params

    const { userId } = req

    try {

      const services = await Service.findOne({
        where: {
          id: id,
          establishment_id: userId
        }
      })

      if (!services) return res.status(404).send({ Error: "Serviço/Produto não encontrado" })

      await services.destroy()
      return res.status(204).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error.message })
    }
  }
}