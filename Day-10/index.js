const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
app.use("/static", express.static("public"));
app.get("/library", (req, res) => {
  console.log(req.query.userId);
  fs.readFile("library.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      res.send(data);
    }
    const obj = JSON.parse(data);
    const filteredData = obj.filter((e) => {
      console.log(e);
      if (obj === e) {
        return obj;
      } else {
        return null;
      }
    });
  });
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app
  .route("/book")
  .get(function (req, res) {
    res.send("Get a random book");
  })
  .post(function (req, res) {
    res.send();
  })
  .put(function (req, res) {
    res.send("Update the book");
  });
app.listen(3000);
console.log("started");
