// Provide resolver functions for your schema fields
const User = require("../model/User");
const mongoose = require("mongoose");

const Cat = mongoose.model("Cat", { name: String });
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    cats: () => Cat.find(),
    users: () => User.find(),
  },
  Mutation: {
    createCat: async (__, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },
    createUser: async (__, details) => {
      console.log(details);
      const user = new User(details);
      await user.save();
      return user;
      s;
    },
  },
};

module.exports = resolvers;
