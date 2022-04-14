var fs = require("fs");
var content = "this is the content in the file";

fs.writeFile("message.text", content, (err) => {
  if (err) {
    throw error;
  } else {
    console.log("it is saved");
  }
});
