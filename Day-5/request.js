const fs = require("fs");
var http = require("https");
http
  .get("https://dev-api.mstars.mn/api/foods", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const foods = JSON.parse(Buffer.concat(data).toString());
      console.log(foods);
      fs.writeFile("food.json", foods, (err) => {
        if (err) {
          throw err;
        } else {
          console.log("hello");
        }
      });
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
