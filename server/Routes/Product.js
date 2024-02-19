const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  getProductByCategory,
} = require("../Services/Product");
const productRoute = express.Router();

productRoute.post("/create/product", createProduct);
productRoute.get("/get/products", getAllProducts);
productRoute.get("/get/product/:id", getSingleProduct);
productRoute.post("/get/category", getProductByCategory);

module.exports = productRoute;
