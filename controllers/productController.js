const asyncHandler = require("../middlewares/asyncHandler");
const Product = require("../models/ProductModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ success: true, data: products });
});

const getProductById = asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id);
  res.status(200).json({ success: true, data: products });
});

module.exports = { getProductById, getProducts };
