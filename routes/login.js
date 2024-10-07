var express = require("express");
const checkLogin = require("../middlewares/user/checkLogin");
const readUser = require("../middlewares/user/readUser");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("login");
});

router.post("/", [readUser, checkLogin], (req, res) => {
  const { user } = res.locals;
  if (user.status === "admin") {
    res.redirect("/admin");
  } else {
    res.redirect("/");
  }
  //   console.log(res.locals.user);
});

module.exports = router;
