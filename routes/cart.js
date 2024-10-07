var express = require("express");
const readCart = require("../middlewares/cart/readCart");
const addCart = require("../middlewares/cart/addCart");
const deleteCart = require("../middlewares/cart/deleteCart");
const readProduct = require("../middlewares/product/readProduct");

var router = express.Router();

/* GET home page. */
router.get("/", readCart, function (req, res, next) {
  res.render("cart", { cart: res.locals.cart });
});

router.post("/", [readProduct, readCart, addCart]);

router.delete("/:id", [readCart, deleteCart]);

module.exports = router;
