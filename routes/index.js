const path = require("path")
const router = require("express").Router()

var db = require("../models")

router.post("/api/s/newmessage", (req, res) => {

  // Handle an incoming Slack authentication
  // Based on the presence of challenge
  if(req.body.challenge) {
    res.send(req.body.challenge)
    console.log("Incoming Slack comfirmation")
    console.log(req.body)
  }
  
  // Handle a new incoming message
  // Based on the presence of event.event_ts and event.text
  // Also based on if the incoming event is a message and if there is no subtype
  else if(req.body.event.event_ts && req.body.event.text && req.body.event.type==="message" && !req.body.event.subtype) {
    console.log("Incoming new message")
    console.log(req.body)

    let incomingMessage = {
      message: req.body.event.text,
      user: req.body.event.user,
      channel: req.body.event.channel,
      time: req.body.event.event_ts.substring(0,10),
      token: req.body.token
    }
    
    db.Messages.create(incomingMessage)
      .then(dbMessages => {
        console.log("Message saved to database")
        res.end()
      })
  }

  // Handle a deleted message
  // Based on the presence of event.subtype
  else if(req.body.event.subtype==="message_deleted") {
    console.log("Incoming message deletion")
    console.log(req.body)
    
    db.Messages.update({deleted: 1}, {
      where: {
        message: req.body.event.previous_message.text,
        time: req.body.event.previous_message.ts.substring(0,10)
      }
    })
      .then(dbMessages => {
        console.log("Message marked deleted")
        res.end()
      })
  }

  // Handle an edited message
  // Based on the presence of event.subtype
  else if(req.body.event.subtype==="message_changed") {
    console.log("Incoming message edit")
    console.log(req.body)
    
    db.Messages.update(
      {
        message: req.body.event.message.text,
        edited: 1,
        original: req.body.event.previous_message.text
      }, {
        where: {
          message: req.body.event.previous_message.text,
          time: req.body.event.previous_message.ts.substring(0,10)
        }
      }
    )
      .then(dbMessages => {
        console.log("Message marked edited and updated")
        res.end()
      })
  }

  // Handle anything else
  else {
    console.log("Incoming unknown message")
    console.log(req.body)
    res.end()
  }
})

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
)

module.exports = router
