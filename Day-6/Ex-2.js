let http = require("http");
let fs = require("fs");
let https = require("https");
http
  .createServer((request, response) => {
    https.get("https://ghibliapi.herokuapp.com/films", (response) => {
      let data = [];
      response.on("data", (chunk) => {
        data.push(chunk);
      });
      response.on("end", () => {
        const films = JSON.parse(Buffer.concat(data).toString());
        console.log(films);
        fs.writeFile("films.json", JSON.stringify(films), (err) => {
          if (err) {
            throw err;
          } else {
            console.log("done");
          }
        });
      });
    });
  })
  .listen(3001);
