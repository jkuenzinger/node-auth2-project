const express = require("express");
const helmet = require("helmet");
const session = require("express-session");






server.use(helmet());
server.use(express.json());
// endpoints
server.use("/api/users");
server.use("/api/auth");



// message so you know server is running
server.get("/", (req, res) => {
    res.json({ api: "It's ALIIIIVEEE it's alliiiiiveee" });
  });
  
  module.exports = server;