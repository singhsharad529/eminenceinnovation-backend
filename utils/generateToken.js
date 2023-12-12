const jwt = require("jsonwebtoken");

/*

- This is file where we are generating jwt token 
- combining id and jwt secret and returning jwt token

*/

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
