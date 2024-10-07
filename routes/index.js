var express = require("express");
const readProduct = require("../middlewares/product/readProduct");

var router = express.Router();

/* GET home page. */
router.get("/", readProduct, function (req, res, next) {
  res.render("index", { products: res.locals.products });
});

module.exports = router;
