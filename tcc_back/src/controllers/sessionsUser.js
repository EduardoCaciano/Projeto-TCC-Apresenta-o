const User = require("../models/User")
const bcrypt = require("bcryptjs")
const { generateToken } = require("../utils")

module.exports = {
	async store(req, res) {
		const {
			email,
			password } = req.body

		const user = await User.findOne({
			where: {
				email: email
			}
		})

		if (!user) return res.status(403).send({ error: "Usuário não existe" })

		const result = bcrypt.compareSync(password, user.password)

		if (!user || !result) return res.status(403).send({ error: "Usuário e/ou senha inválidos" })

		const token = generateToken({
			userId: user.id,
			userName: user.name
		})

		res.send({ user: { email: user.email, }, token })
	}
}