var os = require("os");
var http = require("http");

let data = [
  {
    a: os.homedir(),
    b: os.hostname(),
    c: os.userInfo(),
  },
];
http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write(JSON.stringify(data));
    response.end();
  })
  .listen(3000);
console.log(os.homedir());
