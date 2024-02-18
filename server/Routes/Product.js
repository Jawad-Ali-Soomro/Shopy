const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
} = require("../Services/Product");
const productRoute = express.Router();

productRoute.post("/create/product", createProduct);
productRoute.get("/get/products", getAllProducts);
productRoute.get("/get/product/:id", getSingleProduct);

module.exports = productRoute;
