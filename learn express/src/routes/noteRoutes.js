const express = require("express");
const noteRouter = express.Router();

noteRouter.post("/", (req, res) => {
  res.send("note get request");
});

noteRouter.post("/signin", (req, res) => {
    res.send("note post");
  });


  module.exports = noteRouter;