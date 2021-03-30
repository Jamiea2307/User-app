const bcrypt = require("bcrypt");
const { registerValidation } = require("../validation/Register");
const { loginValidation } = require("../validation/Login");
const { UserInputError } = require("apollo-server-express");
const createTokens = require("../authorisation/auth");
const Verify = require("../authorisation/verification");
const User = require("../model/User");
const Post = require("../model/Post");

const resolvers = {
  Query: {
    users: (_, __, { req }) => {
      Verify(req);
      return User.find();
    },
    user: (_, __, { req }) => {
      Verify(req);
      return User.findOne({ _id: req.userId });
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
    loginUser: async (__, userDetails, { res }) => {
      const { error } = loginValidation(userDetails);
      if (error) return new UserInputError(error.message);

      const user = await User.findOne({ email: userDetails.email });
      if (!user) return new UserInputError("Email or password Incorrect");

      const validPass = await bcrypt.compare(
        userDetails.password,
        user.password
      );
      if (!validPass) return new UserInputError("Email or password incorrect");

      const { accessToken, refreshToken } = createTokens(user);

      res.cookie("refresh-token", refreshToken);
      res.cookie("access-token", accessToken);

      return user;
    },
    invalidateTokens: async (_, __, { req }) => {
      if (!req.userId) {
        return false;
      }

      await User.updateOne({ _id: req.userId }, { $inc: { count: 1 } });

      // await user.save();

      return true;
    },
    logoutUser: async (_, __, { res, req }) => {
      Verify(req);

      if (!req.userId) return false;

      res.clearCookie("access-token");
      res.clearCookie("refresh-token");

      return true;
    },
    createPost: async (__, details, { res, req }) => {
      Verify(req);

      // const post = new Post(details);
      // post.save();
      // console.log(details.content);

      const user = await User.findOne({ _id: req.userId });

      await user.save((err) => {
        if (err) return console.log(err);

        const post = new Post({
          author: req.userId,
          content: details.content,
        });

        post.save((err) => {
          if (err) return console.log(err);
        });
      });

      return true;
    },
  },
};

module.exports = resolvers;
