const express = require("express")
const cors = require("cors");
const admin = require('./firebase-admin/admin');
const Auth = require("./routes/auth/auth-router.js")
const Users = require("./routes/users/users-router.js")
const Locations = require("./routes/locations/locations-router.js")
const Addresses = require("./routes/addresses/addresses-router.js")

const server = express();
server.use(express.json())
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json("You made it!")
})

async function verifyToken(req, res, next) {
  const idToken = req.headers.authorization
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken)
    if(decodedToken) {
      req.body.uid = decodedToken.uid
      return next()
    } else {
      return res.status(401).send("You are not authorized")
    }
  } catch (error) {
    return res.status(401).send("What happened!")
  }
}

server.use("/", verifyToken)
server.use("/auth", Auth)
server.use("/users", Users)
server.use("/locations", Locations)
server.use("/contact", Addresses)

module.exports = server;