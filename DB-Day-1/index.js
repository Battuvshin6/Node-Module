const express = require("express");
const app = express();
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employees",
  password: "batnaA-03",
  multipleStatements: true,
});
connection.connect((err) => {
  if (!err) {
    console.log("Datebase connected successfully");
  } else {
    console.log("Connection failed" + JSON.stringify(err, undefined, 2));
  }
});
app.use(express.json());
app.get("/employees", (req, res) => {
  const limit = req.query;
  connection.query(
    "select * from employees limit " + limit.limit,
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});
app.get("/employees/:id", (req, res) => {
  connection.query(
    "select * from employees where emp_no = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    }
  );
});
app.post("/employees", (req, res) => {
  const query = req.body;
  const empNo = query.emp_no;
  const birth_date = query.birth_date;
  const first_name = query.first_name;
  const last_name = query.last_name;
  const gender = query.gender;
  const hire_date = query.hire_date;
  connection.query(
    `insert into employees (emp_no, birth_date,first_name,last_name,gender,hire_date) values (?,?,?,?,?,?)`,
    [empNo, birth_date, first_name, last_name, gender, hire_date],
    (err, rows, field) => {
      if (!err) {
        res.send("user created");
      } else {
        console.log(err);
      }
    }
  );
});
app.listen(3000);
