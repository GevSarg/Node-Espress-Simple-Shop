const fs = require("fs");
const path = require("path");

function readProduct(req, res, next) {
  fs.readFile(
    path.join(__dirname, "../../db/products.json"),
    "utf-8",
    (err, data) => {
      if (err) {
        return next(err);
      }

      res.locals.products = JSON.parse(data);
      next();
    }
  );
}

module.exports = readProduct;
