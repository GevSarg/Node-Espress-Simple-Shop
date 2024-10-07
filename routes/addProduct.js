var express = require("express");
const readProduct = require("../middlewares/product/readProduct");
const checkValidation = require("../middlewares/product/checkValidation");
const addProduct = require("../middlewares/product/addProduct");
const writeproduct = require("../middlewares/product/writeProduct");
var router = express.Router();

/* GET users listing. */
router.get("/", readProduct, function (req, res, next) {
  res.render("addProduct", { products: res.locals.products });
});

router.post(
  "/",
  [readProduct, checkValidation, addProduct, writeproduct],
  (req, res) => {
    res.redirect("/admin");
  }
);
module.exports = router;
