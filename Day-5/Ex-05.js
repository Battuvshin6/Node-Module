var http = require("http");
var fs = require("fs");
var queryString = require("querystring");
var path = require("path");
http
  .createServer((request, response) => {
    if (request.url.match(/^\/data/)) {
      const type = request.url.split("=")[1];
      if (type === "jpeg") {
        fs.readFile("dot.jpeg", (error, data) => {
          if (error) {
            throw error;
          } else {
            response.writeHead(200, { "Content-Type": "image/jpeg" });
            response.write(data);
            response.end();
          }
        });
      } else {
        response.end("Not Found 404");
      }
    }
  })
  .listen(3000);
console.log("Server has started");
