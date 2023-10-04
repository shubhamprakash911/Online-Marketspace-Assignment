const User = require("../models/userModel");
const asyncHandler = require("./asyncHandler");
const jwt = require("jsonwebtoken");

// User must be authenticated
const authenticate = asyncHandler(async (req, res, next) => {
  // Read JWT from the 'jwt' cookie
  const { token } = req.cookies;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = authenticate;
