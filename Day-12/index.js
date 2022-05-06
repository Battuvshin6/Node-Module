const express = require("express");
const app = express();
const logStuff = require("./logStuff");
app.get(
  "/user/:id",
  (req, res, next) => {
    const user_id = req.params.id;
    if (user_id > 2000) {
      next("route");
    }
    if (user_id < 50) {
      next();
    }
    res.send("I will send user information #1");
  },
  function (req, res, next) {
    res.send("I will send user information #1.1");
  }
);
app.get("/user/:id", (req, res) => {
  res.send("I will send user information #2");
});

app.get("/arrayuser/:id", logStuff, (req, res, next) => {
  res.send("User Info");
});
app.listen(3000);
