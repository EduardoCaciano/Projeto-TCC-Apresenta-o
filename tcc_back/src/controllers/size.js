const Size = require("../models/Size")

module.exports = {
  async index(req, res) {

    try {

      const size = await Size.findAll()

      return res.status(200).send({ Size: size })

    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async store(req, res) {

    const { size } = req.body

    try {

      await Size.findOrCreate({
        where: {
          size: size
        }
      })

      return res.status(201).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  },

  async delete(req, res) {

    const { size } = req.body

    try {

      const sizes = await Size.findOne({
        where: {
          size: size
        }
      })

      if (!sizes) res.status(400).send({ Error: `${animal_type} não encontrador!` })

      await sizes.destroy()
      return res.status(204).send()
    } catch (error) {
      console.log(error)
      return res.status(500).send({ Error: error })
    }
  }
}