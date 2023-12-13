const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

// login a user
const authUser = asyncHandler(async (req, res) => {
  //retrieving a username and password from body
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  //checking if a given password matched with stored password
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

// signup a user
const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  //retrieving a username and password from body
  const { username, password } = req.body;

  //user exist or not
  const userExist = await User.findOne({ username });
  if (userExist) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  //creating a user, if it is not present in the db
  const user = await User.create({
    username,
    password,
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error found");
  }
});

module.exports = { authUser, registerUser };
