const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes")
require('dotenv').config()

console.log('env', process.env)
const app = express()

const PORT = process.env.PORT || 3001

var db = require("./models")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

app.use(routes)

// Start the API server and sync Sequelize
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
  )
})
