const asyncHandler = require("../middlewares/asyncHandler");
const Product = require("../models/ProductModel");
const User = require("../models/userModel");

// @desc    Create Cart
// @route   POST /api/cart
// @access  Private
const createCart = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  const product = await Product.create(req.body);
  user.cart = product._id;
  await user.save();
  res.status(201).json({ success: true, data: product });
});

// @desc    Update Cart
// @route   PATCH /api/cart
// @access  Private
const updateCartById = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(204).json({ success: true, data: product });
});

// @desc    Delete Cart
// @route   DELETE /api/cart/:id
// @access  Private
const deleteCartById = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({ success: true, data: product });
});

module.exports = { createCart, updateCartById, deleteCartById };
