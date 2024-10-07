const fs = require("fs");
const path = require("path");

function addCart(req, res) {
  const newProductId = req.body.id;
  const { products, cart } = res.locals;

  const product = products.find((p) => p.id === newProductId);

  if (product) {
    cart.push(product);
  }

  fs.writeFile(
    path.join(__dirname, "../../db/cart.json"),
    JSON.stringify(cart, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Could not update cart." });
      }
      res.status(200).json({ message: "Product added to cart." });
    }
  );
}

module.exports = addCart;
