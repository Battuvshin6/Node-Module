const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/users/:userId/books/:bookId", (request, response) => {
  fs.readFile("user.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      let users = JSON.parse(data);
      const filteredUser = users.filter((e) => {
        if (e.id === Number(request.params.userId)) {
          return e;
        }
      });
      response.send(filteredUser);
    }
  });
});

app.post("/", (request, response) => {
  fs.readFile("user.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      let users = JSON.parse(data);
      users.push(request.body);
      fs.writeFile("user.json", JSON.stringify(users), (err) => {
        if (err) {
          throw err;
        }
      });
    }
  });
  response.send("got it");
});
app.listen(3000);
