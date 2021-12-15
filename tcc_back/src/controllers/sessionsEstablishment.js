const Establishment = require("../models/Establishment")
const bcrypt = require("bcryptjs")
const { generateToken } = require("../utils")

module.exports = {
	async store(req, res) {
		const {
			email,
			password } = req.body

		const establishment = await Establishment.findOne({
			where: {
				email: email
			}
		})

		if (!establishment) return res.status(403).send({ error: "Usuário não existe" })

		const result = bcrypt.compareSync(password, establishment.password)

		if (!establishment || !result) return res.status(403).send({ error: "Usuário e/ou senha inválidos" })

		const token = generateToken({ userId: establishment.id })

		return res.send({ establishment: establishment, token })
	}
}