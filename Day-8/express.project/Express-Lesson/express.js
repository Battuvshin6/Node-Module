const express = require("express");
const request = require("request");
const app = express();
app
  .get("/api/foods", (req, res) => {
    request("https://dev-api.mstars.mn/foods", (error, response) => {
      if (req === error) {
        throw error;
      } else {
        res.send(response);
      }
    });
  })
  .listen(5000);
