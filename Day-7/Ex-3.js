let http = require("https");
let events = require("events");
let eventEmitter = new events();
let https = require("https");
eventEmitter.on("message");
http
  .createServer((request, response) => {
    https.get("https://ghibliapi.herokuapp.com/films ");
    if (request.url === "/films/show") {
      eventEmitter.emit("message", response);
    }
    response.end();
  })
  .listen(3001);
