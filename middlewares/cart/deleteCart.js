// middlewares/product/deleteProduct.js
const fs = require("fs");
const path = require("path");

const deleteProduct = (req, res, next) => {
  const { id } = req.params;
  const { cart } = res.locals;

  const productIndex = cart.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  cart.splice(productIndex, 1);

  fs.writeFile(
    path.join(__dirname, "../../db/cart.json"),
    JSON.stringify(cart, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing to file" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    }
  );
};

module.exports = deleteProduct;
