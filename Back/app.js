require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

app.use(cookieParser());

app.use((req, _, next) => {
  const accessToken = req.cookies["access-token"];
  const refreshToken = req.cookies["refresh-token"];
  if (!accessToken && !refreshToken) {
    return next();
  }
  try {
    const data = jwt.verify(accessToken, process.env.TOKEN_SECRET);
    req.userId = data.userId;
    return next();
  } catch {}

  if (!refreshToken) {
    return next();
  }
  next();
});

server.applyMiddleware({ app });

// app.use("/index", indexRoute);
// app.use("/user", userRoute);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

module.exports = app;
