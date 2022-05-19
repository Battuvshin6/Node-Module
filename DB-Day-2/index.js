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
connection.connect((err) => {
  if (!err) {
    console.log("Success");
  } else {
    console.log("error");
  }
});
app.use(express.json());
app.get("/company", (req, res) => {
  const request = req.query;
  connection.query(
    `select count(*) from employees e left join titles t on e.emp_no=t.emp_no where title=?`,
    [request.title],
    (err, rows, field) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    }
  );
});
app.get("/employees", (req, res) => {
  const request = req.query;
  connection.query(
    `select sum(salary) as totalSalary from departments d left join dept_emp a on d.dept_no=a.dept_no left join employees e on a.emp_no=e.emp_no left join salaries s on e.emp_no=s.emp_no where dept_name= 'Finance'`,
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
  .get("/managers/salary", (req, res) => {
    connection.query(
      `select sum(salary) as managerSalary from dept_manager d left join salaries s on d.emp_no=s.emp_no`,
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
    console.log("Server is working at 3000");
  });
