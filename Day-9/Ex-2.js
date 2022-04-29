let request = require("request");
let express = require("express");
let app = express();

app.get("/films", (req, res) => {
  request("https://ghibliapi.herokuapp.com/films", (err, res, body) => {
    if (err) {
      throw error;
    } else {
      res.end();
    }
    let data = JSON.parse(body);
    const tableBegin = "<table>";
    const tableEnd = "</table>";
    let content = "";
    data.map((e) => {
      content +
        `<tr ><td >${e.title}</td> <td>${e.original_title}</td> <td>${e.original_title_romansed}</td> <td ><img style=' width: 100px' src="${e.image}"/></td></tr>`;
    });
    const result = tableBegin + content + tableEnd;
  });
});
