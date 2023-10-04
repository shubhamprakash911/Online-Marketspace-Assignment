const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String },
    phone: { type: String },
    listing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    orders: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  },
  { versionKey: false }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
