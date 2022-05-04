const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");
const fs = require("fs");
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
app.listen(3000);
