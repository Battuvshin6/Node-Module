const express = require("express");
const fs = require("fs");
const app = express();
app.get("/get-data", (req, res) => {
  fs.readFile("/data/data.cvg", "utf8", function (error, data) {
    let dataArray = data.split(/\r?\n/);
    let body = dataArray;
    res.send(body);
  });
});
app.listen(3003);
