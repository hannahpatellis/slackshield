const path = require("path")
const router = require("express").Router()

var db = require("../models")

router.post("/api/s/newmessage", (req, res) => {
  console.log(req.body)
  if(req.body.challenge) res.send(req.body.challenge)
  
  let incomingMessage = {
    message: req.body.event.text,
    user: req.body.event.user,
    channel: req.body.event.channel,
    time: req.body.event.event_ts.substring(0,10),
    token: req.body.token
  }
  
  db.Messages.create(incomingMessage)
    .then(dbMessages => {
      console.log(dbMessages)
      res.end()
    })
})

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
)

module.exports = router
