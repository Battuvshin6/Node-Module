let http = require("http");
let EventEmitter = require("events");
let eventEmitter = new EventEmitter();
let fs = require("fs");
let https = require("https");

http
  .createServer(function (request, response) {
    if (request.url === "/films") {
      eventEmitter.emit("message", response);
      response.end();
    }
  })
  .listen(3001);
eventEmitter.on("message", (res) => {
  https
    .get("https://ghibliapi.herokuapp.com/films", (response) => {
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
        res.end();
      });
    })
    .on("error", (err) => {
      console.log("Error:" + err.message);
    });
});
