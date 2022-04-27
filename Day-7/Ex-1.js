let http = require("http");
let EventEmitter = require("events");
let chatEmitter = new EventEmitter();
http
  .createServer(function (request, response) {
    chatEmitter.emit("message");
    response.end();
  })
  .listen(3000);
chatEmitter.on("message", () => {
  console.log("Your request is sucessful");
});
