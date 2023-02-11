const express = require("express");
const userRouter = express.Router();

userRouter.post("/signUp", (req, res) => {
  res.send("singup");
});

userRouter.post("/signin", (req, res) => {
    res.send("singin");
  });


  module.exports = userRouter;