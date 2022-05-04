const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const fs = require("fs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.post(
  "/register",
  body("email").isEmail(),
  body("phone").isLength({ min: 6, max: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      res.send("send");
    }
  }
);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options");
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/404", (req, res) => {
  res.render("404", { message: "oopsie!" });
});
app.get("/js", (req, res) => {
  let data = {
    name: "Kaze",
    hobbies: ["playing basketball", "Esport", "cycling"],
  };
  res.render("js", { data: data });
});

app.get("/photo", (req, res) => {
  let data = [
    {
      name: "Cinnamon Rolls",
      pic: "/roll.jpeg",
    },
    {
      name: "Donuts",
      pic: "/donuts.jpeg",
    },
    {
      name: "Pie",
      pic: "/pie.jpeg",
    },
  ];
  res.render("photo", { data: data });
});
app.listen(3000);
