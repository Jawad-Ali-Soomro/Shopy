const express = require("express");
const { createProduct } = require("../Services/Product");
const productRoute = express.Router();

productRoute.post("/create/product", createProduct);

module.exports = productRoute;
