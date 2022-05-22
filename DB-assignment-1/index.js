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
app.post("/employees", (req, res) => {
  connection.query(
    `update employees set firstname=${req.body.firstname} ,lastname=${req.body.lastname}   where  employeenumber=${req.query.id}  `,
    (err, rows, field) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send("error");
      }
    }
  );
});
app.put("/employees", (req, res) => {
  connection.query(
    `update employees set firstname=${req.body.firstname} ,lastname=${req.body.lastname}   where  employeenumber=${req.query.id}  `,
    (err, rows, field) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send("error");
      }
    }
  );
});
app.delete("/employees", (req, res) => {
  connection.query(
    `delete form table employees where emploteenumber=?`,
    [body.query.id],
    (err, rows, field) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    }
  );
});
app
  .get("/employees/extentions", (req, res) => {
    connection.query(
      `select employeenumber,extension from employees`,
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
    console.log("App starting at 3000");
  });
