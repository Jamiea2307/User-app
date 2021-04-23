// const bcrypt = require("bcrypt");
const bcrypt = require("bcryptjs");
const { registerValidation } = require("../validation/Register");
const { loginValidation } = require("../validation/Login");
const { postValidation } = require("../validation/Post");
const { UserInputError } = require("apollo-server-express");
const createTokens = require("../authorisation/auth");
const Verify = require("../authorisation/verification");
const User = require("../models/User");
const Post = require("../models/Post");
const Comments = require("../models/Comment");

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
    posts: async (_, __, { req }) => {
      Verify(req);

      //needs to be updated to find posts in a certain way otherwise
      //can be removed as getUserPost has same func
      const posts = await Post.find().sort({ dateAdded: "desc" }).populate({
        path: "name",
        select: "name",
      });

      const sortedPosts = posts.map((post) => {
        return {
          id: post.id,
          name: post.name.name,
          title: post.title,
          body: post.body,
          date: post.dateAdded.toISOString(),
        };
      });

      return sortedPosts;
    },
    getUserPosts: async (_, details, { req }) => {
      Verify(req);
      const user = await User.findOne({ name: details.userName });

      if (!user || user === null) throw new UserInputError("User Not Found");

      const posts = await Post.find({
        name: user._id,
      })
        .sort({ dateAdded: "desc" })
        .populate({
          path: "name",
          select: "name",
        });

      const sortedPosts = posts.map((post) => {
        return {
          id: post.id,
          name: post.name.name,
          title: post.title,
          body: post.body,
          date: post.dateAdded.toISOString(),
        };
      });

      return sortedPosts;
    },
    getThread: async (_, details, { req }) => {
      Verify(req);

      const postDetails = await Post.findById(details.postId).populate({
        path: "name",
        select: "name",
      });

      const post = {
        id: postDetails._id,
        name: postDetails.name.name,
        title: postDetails.title,
        body: postDetails.body,
        date: postDetails.dateAdded.toISOString(),
      };

      return post;
    },
    getComments: async (_, details, { req }) => {
      Verify(req);

      const parent = await Post.findOne({ _id: details.parentPost }).populate({
        path: "comments",
        populate: {
          path: "name",
          select: "name",
        },
      });

      // console.log(parent);

      const sortedPosts = parent.comments.map((post) => {
        return {
          children: [],
          id: post._id,
          parentPost: post.parentPost,
          name: post.name.name,
          body: post.body,
          date: post.dateAdded.toISOString(),
        };
      });

      console.log(sortedPosts);

      return sortedPosts;
    },
  },
  Mutation: {
    createUser: async (__, details) => {
      const { error } = registerValidation(details);
      if (error) throw new UserInputError(error.message);

      const emailExists = await User.findOne({ email: details.email });
      if (emailExists) throw new UserInputError("Email already exists");

      const userNameExists = await User.findOne({ name: details.name });
      if (userNameExists) throw new UserInputError("Name already exists");

      const salt = await bcrypt.genSalt(10);
      details.password = await bcrypt.hash(details.password, salt);

      const user = new User(details);
      await user.save();

      return true;
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

      return true;
    },
    logoutUser: async (_, __, { res, req }) => {
      Verify(req);

      if (!req.userId) return false;

      res.clearCookie("access-token");
      res.clearCookie("refresh-token");

      return true;
    },
    createPost: async (__, details, { req }) => {
      Verify(req);
      const { error } = postValidation(details);
      if (error) return new UserInputError(error.message);

      const user = await User.findOne({ _id: req.userId });

      await user.save((err) => {
        if (err) return console.log(err);

        const post = new Post({
          name: req.userId,
          title: details.title,
          body: details.body,
        });

        post.save((err) => {
          if (err) return console.log(err);
        });
      });

      return true;
    },
    createCommentThread: async (__, details, { req }) => {
      Verify(req);

      const post = await Post.findOne({ _id: details.parent });

      const comment = new Comments({
        parentPost: details.parent,
        name: req.userId,
        body: details.body,
      });

      post.comments.push(comment._id);

      post.save();
      comment.save();

      return true;
    },
    // createReply: async (__, details, {}) => {
    //   Verify(req);

    //   return true;
    // },
  },
};

module.exports = resolvers;
