const printFilms = require("./promise.js");
function printAllPromise() {
  printFilms("A", () => {}).then(() => {
    return printFilms("B", () => {}).then(() => {
      return printFilms("C", () => {});
    });
  });
}
printAllPromise();
