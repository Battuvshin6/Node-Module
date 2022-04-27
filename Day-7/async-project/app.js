const request = require("request");
function printFilms(str) {
  request("http://www.google.com", function (error, response, body) {
    console.log(str);
  });
}
module.exports = printFilms;
