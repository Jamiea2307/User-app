const bcrypt = require("bcrypt");
const { registerValidation } = require("../validation/Register");
const User = require("../model/User");

const resolvers = {
  Query: {
    hello: () => "Hello world!",
    users: () => User.find(),
  },
  Mutation: {
    createUser: async (__, details) => {
      const { error } = registerValidation(details);
      if (error) throw new Error(error);

      const emailExists = await User.findOne({ email: details.email });
      if (emailExists) throw new Error("Email already Exists.");

      const salt = await bcrypt.genSalt(10);
      details.password = await bcrypt.hash(details.password, salt);
      const user = new User(details);
      await user.save();
      return user;
    },
  },
};

module.exports = resolvers;
