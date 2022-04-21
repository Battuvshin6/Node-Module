var http = require("http");
var fs = require("fs");
http
  .createServer(function (request, response) {
    fs.readFile("Ex-3.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        response.end(data);
      }
    });
  })
  .listen(3002);
