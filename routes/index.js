const path = require("path")
const router = require("express").Router()

router.post("/api/s/newmessage", (req, res) => {
  console.log(req.body)
  if(req.body.challenge) res.send(req.body.challenge)
  res.end()
})

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
)

module.exports = router
