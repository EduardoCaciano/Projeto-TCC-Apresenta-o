const Address = require("../models/Address")
const EstablishmentType = require("../models/EstablishmentType")
const Telephone = require("../models/Telephone")
const Establishment = require("../models/Establishment")
const City = require("../models/City")
const State = require("../models/State")
const bcrypt = require("bcryptjs")
const { generateToken } = require("../utils")

module.exports = {

  async index(req, res) {

    try {

      const establishments = await Establishment.findAll({
        where: {
          deleted: null
        },
        skip: 0,
        take: 10,
      })

      const establishment = establishments.map((data) => {
        let { password, id, ...props } = data.dataValues
        return props
      })

      return res.status(200).send(establishment)
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }

  },

  async store(req, res) {

    const {
      establishment: {
        name_establishment,
        responsible_name,
        cnpj,
        password,
        confirm_password,
        email,
        ddd,
        telephone,
        type_establishment },
      address: {
        name_address,
        number,
        cep,
        district,
        complement,
        city,
        state,
        initials_state
      } } = req.body

    try {

      const type_establishments = await EstablishmentType.findOne({
        where: {
          type: type_establishment,
        }
      })

      if (!type_establishments) return res.status(400).send({ Error: `Tipo estabelecimento desconhecido` })

      let states = await State.findOrCreate({
        where: {
          name: state,
          initials: initials_state
        }
      })

      let citys = await City.findOrCreate({
        where: {
          name: city,
          state_id: states[0].id
        }
      })

      citys = await City.findOne({
        where: {
          name: citys[0].name
        }
      })

      states = await State.findOne({
        where: {
          name: states[0].name
        }
      })

      const address = await Address.findOrCreate({
        where: {
          name: name_address,
          number: number,
          cep: cep,
          district: district,
          complement: complement,
          city_id: citys.dataValues.id
        }
      })

      let establishment = await Establishment.findOne({
        where: {
          name_establishment: name_establishment,
          cnpj: cnpj,
          email: email,
        }
      })

      if (establishment) return res.status(400).send({ error: `Estabelecimento já existente!` })

      if (password !== confirm_password) return res.status(400).send({ Error: "Senhas não coincidem" })

      const passwordHashed = bcrypt.hashSync(password)

      establishment = await Establishment.create({
        name_establishment: name_establishment,
        responsible_name: responsible_name,
        cnpj: cnpj,
        password: passwordHashed,
        email: email,
        address_id: address[0].id,
        establishmentType_id: type_establishments.dataValues.id
      })

      let telephones = await Telephone.findOne({
        where: {
          ddd: ddd,
          number: telephone
        }
      })

      if (telephones) return res.status(400).send({ error: 'Telefone já registrado' })

      telephones = await Telephone.create({
        number: telephone,
        ddd: ddd,
        establishment_id: establishment.id
      })

      const token = generateToken({ userId: establishment.id })

      const { password: pass, id, ...props } = establishment.dataValues

      return res.status(201).send({
        Establishment: {
          establishment: props,
          telephone: telephones
        },
        token
      })

    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async update(req, res) {
    const {
      establishment: {
        name_establishment,
        responsible_name,
        cnpj,
        password,
        confirm_password,
        email,
        type_establishment },
      address: {
        name_address,
        number,
        cep,
        district,
        complement,
        city,
        state,
        initials_state
      } } = req.body

    const { userId } = req

    try {

      const establishment = await Establishment.findOne({
        where: {
          id: userId
        }
      })

      if (!establishment) return res.status(400).send({ Error: "Estabelecimento não encontrado" })

      const type_establishments = await EstablishmentType.findOne({
        where: {
          type: type_establishment,
        }
      })

      if (!type_establishments) return res.status(400).send({ Error: `Tipo estabelecimento desconhecido` })

      let states = await State.findOrCreate({
        where: {
          name: state,
          initials: initials_state
        }
      })

      let citys = await City.findOrCreate({
        where: {
          name: city,
          state_id: states[0].id
        }
      })

      citys = await City.findOne({
        where: {
          name: citys[0].name
        }
      })

      states = await State.findOne({
        where: {
          name: states[0].name
        }
      })

      const address = await Address.findOrCreate({
        where: {
          name: name_address,
          number: number,
          cep: cep,
          district: district,
          complement: complement,
          city_id: citys.dataValues.id
        }
      })

      if (password !== confirm_password) return res.status(400).send({ Error: "Senhas não coincidem" })

      const passwordHashed = bcrypt.hashSync(password)

      await Establishment.update({
        name_establishment: name_establishment,
        responsible_name: responsible_name,
        cnpj: cnpj,
        password: passwordHashed,
        email: email,
        address_id: address[0].id,
        establishmentType_id: type_establishments.dataValues.id
      },
        {
          where: {
            id: userId
          }
        }
      )

      return res.status(200).send({ Success: "Atualizado com sucesso" })
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error.message })
    }
  },

  async delete(req, res) {

    const { userId } = req

    try {

      const establishment = await Establishment.findOne({
        where: {
          id: userId
        }
      })

      if (!establishment) res.status(404).send({ Error: "Estabelecimento não encontrado" })

      await Establishment.update({
        deleted: true
      },
        {
          where: {
            id: userId
          }
        }
      )
      return res.status(200).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  }
}
