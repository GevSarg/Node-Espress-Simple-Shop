const bcrypt = require("bcrypt");

function addProduct(req, res, next) {
  const { products, newProduct } = res.locals;

  const id = crypto.randomUUID();
  newProduct.id = id;
  newProduct.image = `./images/${newProduct.image}`;

  products.push(newProduct);

  res.locals.newProduct = products;
  next();
}

module.exports = addProduct;
