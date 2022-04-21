var http = require("http");
http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write("<h1>Hello</h1>");
    response.write("<p>asdasdas</p>");
    response.write("<ol><li>adsad</li></ol>");
    response.end();
  })
  .listen(3001);
