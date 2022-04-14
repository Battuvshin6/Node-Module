var fs = require("fs");
var content = "\nWe are appending this file synchronously using node.js";

fs.appendFileSync("message.text", content);
console.log("file appended successfully");
