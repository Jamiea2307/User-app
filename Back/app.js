require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");
const mongoose = require("mongoose");

const app = express();

// CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

// const indexRoute = require("./routes/index");
// const userRoute = require("./routes/users");

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

// app.use("/index", indexRoute);
// app.use("/user", userRoute);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

module.exports = app;
