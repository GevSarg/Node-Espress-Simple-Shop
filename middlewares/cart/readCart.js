const fs = require("fs");
const path = require("path");

function readCart(req, res, next) {
  fs.readFile(
    path.join(__dirname, "../../db/cart.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        return next(err);
      }
      res.locals.cart = JSON.parse(data);
      next();
    }
  );
}

module.exports = readCart;
