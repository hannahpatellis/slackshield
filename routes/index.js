const path = require("path")
const router = require("express").Router();
const slackInfo = require('../helpers/slackInfo');

const db = require("../models")

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
  // Also checks to make sure the new message is not part of a thread
  else if(req.body.event.event_ts && req.body.event.text && req.body.event.type==="message" && !req.body.event.subtype && !req.body.event.thread_ts && !req.body.event.parent_user_id) {
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

  // Handle a new incoming message on a thread
  // Based on the presence of event.event_ts event.text, event.parent_user_id, and event.thread_ts
  else if(req.body.event.event_ts && req.body.event.text && req.body.event.thread_ts && req.body.event.parent_user_id) {
    console.log("Incoming new thread message")
    console.log(req.body)

    let incomingMessage = {
      message: req.body.event.text,
      user: req.body.event.user,
      channel: req.body.event.channel,
      time: req.body.event.event_ts.substring(0,10),
      token: req.body.token,
      threadParent: req.body.event.parent_user_id,
      threadTime: req.body.event.thread_ts.substring(0,10)
    }
    
    db.Messages.create(incomingMessage)
      .then(dbMessages => {
        console.log("Thread message saved to database")
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



router.get('/api/users', (req, res) => {
  slackInfo.getUsers().then(data => res.json(data)).catch(err => res.json({success: false, ...err}));
});

router.get('/api/channels', (req, res) => {
  slackInfo.getChannels().then(data => res.json(data)).catch(err => res.json({success: false, ...err}));
});

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
)

router.get('/api/messages', (req, res) =>{
  //use url query to filter out deleted messages
  const includeDeleted = (req.query.includeDeleted === 'true')
  const where = includeDeleted ? {} : {$or: [{deleted: false}, {deleted: null}]}
  //query and return all messages as json
  db.Messages.findAll({ where }).then( data => {
    console.log(data);
    res.json(data)} );
})

module.exports = router
