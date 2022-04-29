const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello my name is Kaze");
});
app.listen(3000);

console.log(app);
