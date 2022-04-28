const request = require("request");
function printFilms(str, callback) {
  return new Promise((resolve, reject) => {
    request(
      "https://ghibliapi.herokuapp.com/films",
      (error, response, body) => {
        if (error) {
          console.log(`Could not send request to API:${error.message}`);
          return reject();
        }
        if (response.statusCode != 200) {
          console.error(
            `Expected status code 200 but received ${response.statusCode}.`
          );
          return reject();
        }
        if (response) {
          console.log(str);
          return resolve();
        } else {
          return reject();
        }
      }
    );
  });
}

async function printAllAsyncs() {
  await printFilms("A", () => {});
  await printFilms("B", () => {});
  await printFilms("C", () => {});
}
console.log(printAllAsyncs());
