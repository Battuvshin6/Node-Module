const request = require("request");
request("https://ghibliapi.herokuapp.com/films", function (response, body) {
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body); // Print the HTML for the Google homepage.
});
console.log(request);
