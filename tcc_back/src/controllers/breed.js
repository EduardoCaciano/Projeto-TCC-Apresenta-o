const Breed = require("../models/Breed")

module.exports = {
  async index(req, res) {

    try {

      const breed = await Breed.findAll()

      return res.status(200).send(breed)

    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async store(req, res) {

    const { breed } = req.body

    try {

      await Breed.findOrCreate({
        where: {
          breed: breed
        }
      })

      return res.status(201).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async delete(req, res) {

    const { breed } = req.body

    try {

      const breeds = await Breed.findOne({
        where: {
          breed: breed
        }
      })

      if (!breeds) res.status(400).send({ Error: `${breed} não encontrador!` })

      await breeds.destroy()
      return res.status(204).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  }
}