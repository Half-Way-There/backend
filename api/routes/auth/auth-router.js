const router = require("express").Router()
const Users = require("./auth-helpers.js")

router.post("/login", (req, res) => {
  Users.getUser(req.body.uid)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(500).json({ message: "No user found", err })
    })
})

router.post("/register", (req, res) => {
  Users.addUser(req.body.uid, req.body.address)
    .then((data) => {
      res.status(201).json(data)
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to add user please try again", err })
    })
})

module.exports = router
