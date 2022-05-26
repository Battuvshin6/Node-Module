const e = require("express");
const express = require("express");
const app = express();
const mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "batnaA-03",
  database: "employees",
  multipleStatements: true,
});
app.get("/employees", (req, res) => {
  connection.query(
    `call stored_procedure (${req.query},@result)`,
    (err, rows, field) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    }
  );
});
app.get("/employees/max", (req, res) => {
  connection.execute(`select maxSalary()`, (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else {
      res.send(err);
    }
  });
});
