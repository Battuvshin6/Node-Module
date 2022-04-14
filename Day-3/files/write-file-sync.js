var fs = require("fs");
const { fileURLToPath } = require("url");

var content = "this is the content of the file";

fs.writeFileSync("message.text", content);
console.log("File written successfully");
