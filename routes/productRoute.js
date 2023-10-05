const express = require("express");
const {
  getProducts,
  getProductById,
} = require("../controllers/productController");

const productRoute = express.Router();

productRoute.get("/", getProducts);
productRoute.get("/:id", getProductById);

module.exports = productRoute;
