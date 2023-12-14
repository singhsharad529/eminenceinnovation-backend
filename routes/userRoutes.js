const express = require("express");
const { authUser, registerUser } = require("../controllers/userControllers");
const router = express.Router();

/*
    - The file containes all the user routes
    - User routes are:
        - /api/users/
        - /api/users/login
*/
router.route("/").post(registerUser);
router.route("/login").post(authUser);

module.exports = router;
