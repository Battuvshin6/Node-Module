var fs = require("fs");
var http = require("http");
http
  .createServer(function (request, response) {
    fs.readFile("content.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log(data);
        response.end(data);
      }
    });
  })
  .listen(3002);
