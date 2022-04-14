var http = require("http");
var fs = require("fs");
http
  .createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("index.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log("Operation sucess: " + data);
        response.end(data);
      }
    });
  })
  .listen(3000);
console.log("Server is started");
