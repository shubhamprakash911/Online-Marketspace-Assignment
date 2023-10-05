const express = require("express");
const {
  loginUser,
  registerUser,
  updateUser,
  getUsers,
  getUserById,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.post("/login", loginUser);
userRoute.post("/register", registerUser);
userRoute.put("/update", updateUser);
userRoute.get("/", getUsers);
userRoute.get("/:id", getUserById);

module.exports = { userRoute };
