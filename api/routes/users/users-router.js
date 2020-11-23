const router = require("express").Router()
const Users = require("./users-helpers.js")

router.post("/address", (req, res) => {
  Users.updateAddress(req.body.uid, req.body.address)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(401).json({ message: "Failed to update address.", err })
  })
})

router.delete("/delete-user", (req, res) => {
  Users.deleteUser(req.body.uid)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(401).json({ message: "Failed to delete user.", err })
  })
})

router.post("/category", (req, res) => {
  Users.addCategory(req.body.uid)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(401).json({ message: "Failed to add category.", err })
  })
})

router.delete("/category", (req, res) => {
  Users.deleteCategory(req.body.uid)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(401).json({ message: "Failed to delete category.", err })
  })
})

module.exports = router