const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const asyncHandler = require("express-async-handler");

/*
 - protect is a middleware called authMi which handle authorization task
 - It extract Authorization header from request object 
 - Finds Bearer token from header
 - Perform jwt verfication by extracting id value from token
 - Check if extracted id is present into our database or not
*/

const protect = asyncHandler(async (req, res, next) => {
  // console.log("inside protect");
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, token failed");
  }
});

module.exports = { protect };
