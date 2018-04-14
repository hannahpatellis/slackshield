const path = require("path")
const router = require("express").Router()

router.post("/api/s/newmessage", (req, res) => {
  console.log(req.body)
  res.end()
})

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
)

module.exports = router
