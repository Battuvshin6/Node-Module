const e = require("express");
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
// 15 1
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
// 15  2
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
// 15 3
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
// 16
// app
//   .get("/employees/extentions", (req, res) => {
//     connection.query(
//       `select employeenumber,extension from employees`,
//       (err, rows, field) => {
//         if (!err) {
//           res.send(rows);
//         } else {
//           res.send(err);
//         }
//       }
//     );
//   })

// 16 1
app.get("/employees/salary", (req, res) => {
  connection.query(
    `select first_name,salary from employees e left join salaries s on e.emp_no=s.emp_no;`,
    (err, rows, field) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    }
  );
});
//16 2
app.get("/employees/departments", (req, res) => {
  connection.query(
    `select emp_no,first_name,last_name,dept_no,dept_name,from_date,to_date from departments d left join dept_emp de on d.dept_no=de.dept_no left join employees e on de.emp_no=e.emp_no`,
    (err, rows, field) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    }
  );
});
//16 3
app.get("/employees/maxsalary", (req, res) => {
  connection.query(
    `select emp_no,first_name,last_name,gender,max(salary) from employees e left join salaries s on e.emp_no=s.emp_no;`,
    (err, rows, field) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    }
  );
});
//17 1
app
  .get("/employees?search=name", (req, res) => {
    connection.query(
      `select * from employees where first_name like "%${req.query}%"`,
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
