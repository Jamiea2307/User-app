const bcrypt = require("bcrypt");
const { registerValidation } = require("../validation/Register");
const { loginValidation } = require("../validation/Login");
const User = require("../model/User");
const { UserInputError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    users: () => User.find(),
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
      console.log("user = ", user);
      return user;
    },
    loginUser: async (__, userDetails) => {
      console.log(userDetails);
      const { error } = loginValidation(userDetails);
      if (error) throw new UserInputError(error.message);

      const user = await User.findOne({ email: userDetails.email });
      if (!user) throw new UserInputError("Email or password Incorrect");

      const validPass = await bcrypt.compare(
        userDetails.password,
        user.password
      );
      if (!validPass) throw new UserInputError("Email or password incorrect");

      return user;

      // const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      // res.header("auth-token", token).send(token);
    },
  },
};

module.exports = resolvers;
