const jwt = require("jsonwebtoken");
require("dotenv").config();
const auth = async (req, res, next) => {
  let header = req.header("Authorization");
  if (header) {
    let token = req.header("Authorization").replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_KEY, (err, valid) => {
      if (err) {
        res.send(err);
      } else {
        next();
      }
    });
  } else {
    res.status(401).send({ error: "Token not provided" });
  }
};
module.exports = auth;
