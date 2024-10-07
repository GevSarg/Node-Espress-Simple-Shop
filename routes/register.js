var express = require("express");
const readUser = require("../middlewares/user/readUser.js");
const checkValidation = require("../middlewares/user/checkValidation.js");
const addUser = require("../middlewares/user/addUser.js");
const writeUser = require("../middlewares/user/writeUser.js");
const checkEmail = require("../middlewares/user/checkEmail.js");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("register", {});
});
router.post(
  "/",
  readUser,
  checkEmail,
  checkValidation,
  addUser,
  writeUser,
  (req, res) => {
    res.redirect("/login");
  }
);

module.exports = router;
