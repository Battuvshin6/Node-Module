const express = require("express");
const app = express();
const mysql = require("mysql2");
app.use(express.json());
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "batnaA-03",
  database: "classicmodels",
  multipleStatements: true,
});
connection.connect((err) => {
  if (!err) {
    console.log("Success");
  } else {
    console.log("error");
  }
});
app.put("/employees", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  connection.query(
    `update employees set firstname=?,lastname=?  where  employeenumber=?`,
    [req.body.firstname, req.body.lastname, req.query.id],
    (err, rows, field) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send("error");
      }
    }
  );
});
app
  .get("/employee", (req, res) => {
    connection.query(
      `select employeenumber,phone from employees e left join offices o on e.officecode=o.officecode`,
      (err, rows, field) => {
        if (!err) {
          res.send(rows);
        } else {
          res.send(err);
        }
      }
    );
  })
  .listen(3000, () => {
    console.log("app is starting at 3000");
  });
