const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

// match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("user", userSchema);

module.exports = User;
