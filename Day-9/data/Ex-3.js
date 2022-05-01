const express = require("express");
const fs = require("fs");

const app = express();
app.get("/get-data", (req, res) => {
  const data = fs.createReadStream()
  
}