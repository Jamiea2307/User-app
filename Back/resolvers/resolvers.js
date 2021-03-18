const bcrypt = require("bcrypt");
const { registerValidation } = require("../validation/Register");
const { loginValidation } = require("../validation/Login");
const User = require("../model/User");
const {
  UserInputError,
  AuthenticationError,
} = require("apollo-server-express");
const createTokens = require("../authorisation/auth");

const resolvers = {
  Query: {
    users: (_, __, { req }) => {
      if (!req.userId) throw new AuthenticationError("incorrect credentials");
      return User.find();
    },
  },
  Mutation: {
    createUser: async (__, details) => {
      const { error } = registerValidation(details);
      if (error) throw new UserInputError(error.message);

      const emailExists = await User.findOne({ email: details.email });
      if (emailExists) throw new UserInputError("Email already exists");

      const salt = await bcrypt.genSalt(10);
      details.password = await bcrypt.hash(details.password, salt);

      const user = new User(details);
      await user.save();

      return user;
    },
    loginUser: async (__, userDetails, { req, res }) => {
      const { error } = loginValidation(userDetails);
      if (error) throw new UserInputError(error.message);

      const user = await User.findOne({ email: userDetails.email });
      if (!user) throw new UserInputError("Email or password Incorrect");

      const validPass = await bcrypt.compare(
        userDetails.password,
        user.password
      );
      if (!validPass) throw new UserInputError("Email or password incorrect");
      console.log("resolver= ", user);

      const { accessToken, refreshToken } = createTokens(user);

      res.cookie("refresh-token", refreshToken);
      res.cookie("access-token", accessToken);

      return user;
    },
  },
};

module.exports = resolvers;
