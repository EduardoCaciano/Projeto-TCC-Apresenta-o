const jwt = require("jsonwebtoken")
const auth = require("./config/auth")

const generateToken = (payload) => {
  return jwt.sign(payload, auth.secret, {
    expiresIn: "12h",
  })
}

module.exports = { generateToken }