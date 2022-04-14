//NodeJS file core module

var file = require("fs");
file.readFile("message.text", (error, data) => {
  if (error) {
    console.log("error is happining");
    throw error;
  } else {
    console.log("Content: " + data);
  }
});
