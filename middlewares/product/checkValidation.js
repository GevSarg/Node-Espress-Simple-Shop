const Joi = require("joi");

const productSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .required()
    .messages({
      "string.base": "Product name must be a string",
      "string.min": "Product name must be at least 2 characters long.",
      "any.required": "Product name is required",
    })
    .allow(Joi.number()),

  price: Joi.number().positive().precision(2).required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be a positive number",
    "number.precision": "Price can only have up to 2 decimal places",
    "any.required": "Price is required",
  }),

  brand: Joi.string().min(2).max(50).required().messages({
    "string.base": "Brand must be a string",
    "string.empty": "Brand cannot be empty",
    "string.min": "Brand must be at least 2 characters long",
    "string.max": "Brand cannot be longer than 50 characters",
    "any.required": "Brand is required",
  }),

  image: Joi.string().required().messages({
    "string.base": "Image must be a string",
    "string.empty": "Image cannot be empty",
    "any.required": "Image is required",
  }),
});

async function checkValidation(req, res, next) {
  try {
    const validatedProduct = await productSchema.validateAsync(req.body);
    res.locals.newProduct = validatedProduct;
    next();
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = checkValidation;
