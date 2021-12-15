require("dotenv").config()
const express = require("express")
require("./database")
const { errors } = require("celebrate")
const cors = require('cors')
const routes = require("./routes")

const app = express()

app.use(express.json())

app.use(cors({
  origin: '*',
  methods: '*',
  headers: '*'
}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", '*')
  app.use(cors())
  next()
})

app.use(routes)
app.use(errors())

module.exports = app