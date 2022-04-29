let fs = require("fs");
let express = require("express");
let app = express();
app.get("/get-data", (req, res) => {
  app.send(fs.createReadStream);
});
app.listen(3000);
