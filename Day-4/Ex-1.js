var http = require("http");
let data = {
  type: "animal",
  race: "sheep",
};
http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write(JSON.stringify(data));
    response.end();
  })
  .listen(3000);
console.log(data);
