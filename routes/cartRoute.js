const express = require("express");
const {
  deleteCartById,
  updateCartById,
  createCart,
} = require("../controllers/cartController");

const cartRoute = express.Router();

cartRoute.post("/", createCart);
cartRoute.route("/:id").delete(deleteCartById).patch(updateCartById);

module.exports = cartRoute;
