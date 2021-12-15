const User = require("../models/User")
const Address = require("../models/Address")
const City = require("../models/City")
const State = require("../models/State")
const bcrypt = require("bcryptjs")
const { generateToken } = require("../utils")

module.exports = {

  async index(req, res) {

    try {

      const users = await User.findAll({
        where: {
          deleted: null
        }
      })

      const user = users.map((data) => {
        let { password, ...props } = data.dataValues
        return props
      })

      return res.status(200).send({ User: user })
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  // const newDate = user.map((value) => {
  //     const entries = Object
  //         .entries(value)
  //         .map(([key, value]) => {

  //             if (/^([\d]{2})\/([\d]{2})\/([\d]{4})$/gm.test(value)) {
  //                 const [day, month, year] = value.split('/')

  //                 return [key.replace(' ', '_'), `${year}-${month}-${day}`]
  //             }

  //             return [key.replace(' ', '_'), value]
  //         })

  //     entries.push(['address_id', address.id])
  //     return Object.fromEntries(entries)
  // })

  async store(req, res) {
    const {
      user: {
        email,
        password,
        confirm_password,
        name,
        telephone,
        birth_date,
        cpf },
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

      let user = await User.findOne({
        where: {
          email: email
        }
      })

      // if (user) return res.status(400).send({ Error: "Este e-mail já está sendo utilizado" })

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

      let birthDateReworked = ""

      if (/^([\d]{2})\/([\d]{2})\/([\d]{4})$/gm.test(birth_date)) {
        const [day, month, year] = birth_date.split('/')
        birthDateReworked = `${year}-${month}-${day}`
      }

      user = await User.create({
        name: name,
        email: email,
        password: passwordHashed,
        birth_date: birthDateReworked,
        telephone, telephone,
        cpf: cpf,
        address_id: address[0].id
      })


      const token = generateToken({ userId: user.id })

      const { password: pass, ...props } = user.dataValues

      return res.status(201).send({
        User: {
          user: props
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
      user: {
        email,
        password,
        name,
        telephone,
        birth_date,
        cpf },
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

      const user = await User.findOne({
        where: {
          id: userId
        }
      })

      if (!user) return res.status(400).send({ Error: "Usuario não encontrado" })

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

      const passwordHashed = bcrypt.hashSync(password)

      let birthDateReworked = ""

      if (/^([\d]{2})\/([\d]{2})\/([\d]{4})$/gm.test(birth_date)) {
        const [day, month, year] = birth_date.split('/')
        birthDateReworked = `${year}-${month}-${day}`
      }

      userCurrent = await User.findOne({
        where: {
          id: userId
        }
      })

      if (userCurrent.email != user.email) return res.status(400).send({ Error: "Este e-mail já está sendo utilizado" })

      await User.update({
        name: name,
        email: email,
        password: passwordHashed,
        birth_date: birthDateReworked,
        telephone: telephone,
        cpf: cpf,
        address_id: address[0].id
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

      const user = await User.findOne({
        where: {
          id: userId
        }
      })

      if (!user) return res.status(404).send({ Error: "Usuário não encontrado" })

      await User.update({
        deleted: true
      },
        {
          where: {
            id: userId
          }
        })

      return res.status(200).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  }
}