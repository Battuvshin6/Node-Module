let html = "This is a HTML data";

var http = require("http");
var fs = require("fs");
http
  .createServer(function (request, response) {
    response.writeHead(200);
    fs.readFile("Ex-3.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        console.log("Operation sucess: " + data);
        response.write(html);
        response.end(data);
      }
    });
  })
  .listen(3000);
console.log("Server is started");
