let express = require("express");
let app = express();
let router = express.Router();
app.use("/", router);
router.get("/userinfo/:id", (req, res, next) => {
  res.send("User Info with ID");
});

router.use("/user", (req, res, next) => {
  res.send("User Info");
});
router.get("/userid/:id", (req, res, next) => {
  const id = req.params.id;
  if (id < 10) {
    const err = new Error("Can't find user with this ID!");
    err.status = "fail";
    err.statusCode = 500;
    return next(err);
  }
  res.send("User Info with ID" + id);
});
app.listen(3001);
