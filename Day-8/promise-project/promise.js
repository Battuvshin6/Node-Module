const request = require("request");

const myPromise = new Promise((resolve, reject) => {
  request("https://ghibliapi.herokuapp.com/films", (error, response) => {
    if (error) {
      reject(console.error("error:", error));
    } else {
      resolve(response);
    }
  });
});

function printFilms(str, callback) {
  console.log(str);
  return myPromise;
}

module.exports = printFilms;
