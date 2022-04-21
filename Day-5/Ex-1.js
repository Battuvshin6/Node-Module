var http = require("http");
var fs = require("fs");
http
  .createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("dot.jpeg", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log(data);
      }
      response.end(data);
    });
  })
  .listen(3000);
