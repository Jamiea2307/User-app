const { AuthenticationError } = require("apollo-server-express");

const Verify = (req) => {
  if (!req.userId) throw new AuthenticationError("incorrect credentials");
};

module.exports = Verify;
