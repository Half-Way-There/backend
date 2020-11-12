const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const userRouter = require("./routes/users/users-router")
const addressesRouter = require("./routes/addresses/addresses-router")
const locationsRouter = require("./routes/locations/locations-router")

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());

server.get("/", (req, res) => {
  res.status(200).json({ api: "Half Way There App" });
});

module.exports = server;