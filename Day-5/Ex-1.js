var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write();
    response.end();
  })
  .listen(3000);
