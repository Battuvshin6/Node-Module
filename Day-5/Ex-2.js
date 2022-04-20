var http = require("http");
let data = [
  {
    dog: "Banhar",
    cat: "Garfield",
  },
];

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write(JSON.stringify(data));
    response.end();
  })
  .listen(3001);
console.log(data);
