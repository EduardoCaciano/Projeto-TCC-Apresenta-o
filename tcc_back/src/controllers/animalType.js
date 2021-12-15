const AnimalType = require("../models/Animal_type")

module.exports = {
  async index(req, res) {

    try {

      const animalType = await AnimalType.findAll()

      return res.status(200).send(animalType)

    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async store(req, res) {

    const { animal_type } = req.body

    try {

      await AnimalType.findOrCreate({
        where: {
          type_animal: animal_type
        }
      })

      return res.status(201).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async delete(req, res) {

    const { animal_type } = req.body

    try {

      const animalType = await AnimalType.findOne({
        where: {
          type_animal: animal_type
        }
      })

      if (!animalType) res.status(400).send({ Error: `${animal_type} não encontrador!` })

      await animalType.destroy()
      return res.status(204).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  }
}