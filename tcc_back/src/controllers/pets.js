const Pet = require("../models/Pet")
const AnimalType = require("../models/Animal_type")
const Breed = require("../models/Breed")
const Sex = require("../models/Sex")
const User = require("../models/User")
const Size = require("../models/Size")

module.exports = {
  async index(req, res) {

    const { userId } = req

    try {

      const pets = await Pet.findAll({
        where: {
          user_id: userId
        }
      })

      return res.status(200).send(pets)
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async store(req, res) {
    const {
      name,
      name_type_animal,
      name_size,
      age,
      name_breed,
      description,
      initial_sex } = req.body

    const { userId } = req

    try {

      const type_animal = await AnimalType.findOne({
        where: {
          type_animal: name_type_animal
        }
      })

      if (!type_animal) return res.status(404).send({ Erro: "Pet não encontrado" })

      const breed = await Breed.findOne({
        where: {
          breed: name_breed
        }
      })

      if (!breed) return res.status(404).send({ Erro: "Pet não encontrado" })

      const size = await Size.findOne({
        where: {
          size: name_size
        }
      })

      if (!size) return res.status(404).send({ Erro: "Pet não encontrado" })

      const sex = await Sex.findOne({
        where: {
          initials: initial_sex
        }
      })

      if (!sex) return res.status(404).send({ Erro: "Pet não encontrado" })

      const user = await User.findOne({
        where: {
          id: userId
        }
      })

      if (!user) return res.status(400).send({ error: `Usuario não existente!` })

      let pet = await Pet.findOne({
        where: {
          name: name,
          animal_type_id: type_animal.id,
          size_id: size.id,
          age: age,
          breed_id: breed.id,
          sex_id: sex.id,
          user_id: user.id,
        }
      })

      if (pet) return res.status(400).send({ error: `${name} já existente!` })

      // const datas = req.body.data

      // const newDate = datas.map((value) => {
      //     const entries = Object
      //         .entries(value)
      //         .map(([key, value]) => {

      //             return [key.replace(' ', '_'), value]
      //         })

      //     entries.push(
      //         [
      //             'user_id', user.id,
      //             'animal_type_id', type_animal.id,
      //             'size_id', size.id,
      //             'breed_id', breed.id,
      //             'sex_id', sex.id
      //         ]
      //     )
      //     return Object.fromEntries(entries)
      // })

      // pet = await Pet.bulkCreate(newDate)

      pet = await Pet.create({
        name: name,
        animal_type_id: type_animal.id,
        size_id: size.id,
        age: age,
        breed_id: breed.id,
        description: description,
        sex_id: sex.id,
        user_id: user.id,
      })

      return res.status(201).send({ Pet: pet })

    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async update(req, res) {

    const {
      id,
      name,
      name_type_animal,
      name_size,
      age,
      name_breed,
      description,
      initial_sex } = req.body

    const { userId } = req

    try {

      const pets = await Pet.findOne({
        where: {
          id: id,
          user_id: userId
        }
      })

      if (!pets) return res.status(404).send({ Erro: "Pet não encontrado" })

      const type_animal = await AnimalType.findOne({
        where: {
          type_animal: name_type_animal
        }
      })

      if (!type_animal) return res.status(404).send({ Erro: "Pet não encontrado" })

      const breed = await Breed.findOne({
        where: {
          breed: name_breed
        }
      })

      if (!breed) return res.status(404).send({ Erro: "Pet não encontrado" })

      const size = await Size.findOne({
        where: {
          size: name_size
        }
      })

      if (!size) return res.status(404).send({ Erro: "Pet não encontrado" })

      const sex = await Sex.findOne({
        where: {
          initials: initial_sex
        }
      })

      if (!sex) return res.status(404).send({ Erro: "Pet não encontrado" })

      await Pet.update({
        name: name,
        animal_type_id: type_animal.id,
        size_id: size.id,
        age: age,
        breed_id: breed.id,
        description: description,
        sex_id: sex.id,
      },
        {
          where: {
            id: id
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

      const pets = await Pet.findOne({
        where: {
          id: id,
          user_id: userId
        }
      })

      if (!pets) return res.status(404).send({ Erro: "Pet não encontrado" })

      await pets.destroy()

      return res.status(200).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  }

}