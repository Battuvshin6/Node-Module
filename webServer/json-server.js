let http = require("http");
let object = {
  name: "Battuvshin",
  job: "Student",
};
let jsonObj = object;
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "application/json",
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(JSON.stringify(jsonObj));
  })
  .listen(3000);
console.log("Server running at http://localhost:3000");
