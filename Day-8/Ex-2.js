const request = require("request");

function requestFunction(str) {
  request("https://ghibliapi.herokuapp.com/films", (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data);
  });
}

requestFunction();
module.exports = requestFunction;
