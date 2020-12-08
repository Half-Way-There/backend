const router = require("express").Router()
const Users = require("./users-helpers.js")

router.post("/update", (req, res) => {
  Users.updateUser(req.body.uid, req.body.user)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(401).json({ message: "Failed to update address.", err })
    })
})

router.delete("/delete-user", (req, res) => {
  Users.deleteUser(req.body.uid)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(401).json({ message: "Failed to delete user.", err })
    })
})

router.post("/category", (req, res) => {
  Users.addCategory(req.body.uid, req.body.category)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(401).json({ message: "Failed to add category.", err })
    })
})

router.delete("/category/:id", (req, res) => {
  Users.deleteCategory(req.body.uid, req.params.id)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(401).json({ message: "Failed to delete category.", err })
    })
})

module.exports = router
