const bcrypt = require("bcrypt");
const { registerValidation } = require("../validation/Register");
const User = require("../model/User");
const { UserInputError } = require("apollo-server-express");

const resolvers = {
  Query: {
    hello: () => "Hello world!",
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
  },
};

module.exports = resolvers;
