const router = require("express").Router()
const Locations = require("./locations-helpers.js")

router.post("/add", (req, res) => {
  Locations.addLocation(req.body.uid, req.body.location)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(401).json({ message: "Failed to add location", err })
    })
})

router.delete("/remove", (req, res) => {
  Locations.removeLocation(req.body.uid, req.body.location)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      res.status(401).json({ message: "Failed to delete location", err })
    })
})

module.exports = router
