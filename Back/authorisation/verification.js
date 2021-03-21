const { AuthenticationError } = require("apollo-server-express");

const Verify = (req) => {
  console.log(req.userId);
  if (!req.userId) throw new AuthenticationError("incorrect credentials");
};

module.exports = Verify;
