const request = require("request");
const events = require("events");
const eventEmitter = events;
const http = require("http");
const fse = require("fs-extra");

console.log(request);
http
  .createServer((request, response) => {
    if (request.url === "/films") {
      eventEmitter.emit("message", response);
    }
    response.end();
  })
  .listen(3000);
eventEmitter.on("message", (response) => {
  request(
    "https://ghibliapi.herokuapp.com/films",
    function (error, response, body) {
      console.error("error:", error);
      fse.writeJSON("films.json", response);
      console.log("body:", body);
    }
  );
});
