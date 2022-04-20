var url = require("url");
var adr = "http://localhost:3001/defualt.htm?year=2017%month=february";
var q = url.parse(adr, true);
console.log(q);
