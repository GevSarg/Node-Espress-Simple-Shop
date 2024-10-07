const fs = require("fs");
const path = require("path");

function writeproduct(req, res, next) {
  const { newProduct } = res.locals;

  fs.writeFile(
    path.join(__dirname, "../../db/products.json"),
    JSON.stringify(newProduct, null, 2),
    "utf-8",
    (err) => {
      if (err) {
        return next(err);
      }

      next();
    }
  );
}

module.exports = writeproduct;
