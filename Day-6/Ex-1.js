var os = require("os");
var http = require("http");
let data = [
  {
    platform: os.platform(),
    architecture: os.arch(),
    release: os.release(),
    tmemory: os.totalmem(),
    tcpus: os.cpus(),
    fmemory: os.freemem(),
  },
];
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(data));
    response.end();
  })
  .listen(3000);
