const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  res.header("Content-Type", "application/json");
  next();
});
app.get("/get-data", (req, res) => {
  fs.readFile("./data/data.csv", "utf8", (err, data) => {
    if (err) {
      throw err;
    } else {
      let dataArray = data.split(/\r?\n/);
      let body = dataArray;
      console.log(dataArray);
      res.send(body);
    }
  });
});

app.listen(3000);
