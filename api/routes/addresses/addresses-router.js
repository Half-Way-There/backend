const router = require("express").Router()
const Addresses = require("./addresses-helpers.js")

router.post("/add", (req, res) => {
  Addresses.addContact(req.body.uid, req.body.contact)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(401).json({ message: "Failed to add contact", err })
  })
})

router.put("/update", (req, res) => {
  Addresses.updateContact(req.body.uid, req.body.contact)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(401).json({ message: "Failed to update contact", err })
  })
})

router.delete("/remove/:id", (req, res) => {
  Addresses.deleteContact(req.body.uid, req.params.id)
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(401).json({ message: "Failed to delete contact", err })
  })
})

module.exports = router