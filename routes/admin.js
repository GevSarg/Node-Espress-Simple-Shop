var express = require("express");
const readProduct = require("../middlewares/product/readProduct");
const deleteProduct = require("../middlewares/product/deleteProduct");
var router = express.Router();

/* GET users listing. */
router.get("/", readProduct, function (req, res, next) {
  res.render("admin", { products: res.locals.products });
});

router.delete("/:id", readProduct, deleteProduct, (req, res, next) => {});
module.exports = router;
