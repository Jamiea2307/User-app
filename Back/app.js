require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const User = require("./model/User");
const createTokens = require("./authorisation/auth");

const app = express();

// CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
});

app.use(cookieParser());

// app.use(async (req, res, next) => {
//   const accessToken = req.cookies["access-token"];
//   const refreshToken = req.cookies["refresh-token"];
//   if (!accessToken && !refreshToken) return next();

//   try {
//     const data = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
//     req.userId = data.userId;
//     return next();
//   } catch {}

//   if (!refreshToken) return next();
//   let data;

//   try {
//     data = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
//   } catch {
//     return next();
//   }

//   const user = await User.findOne({ id: data.id });
//   console.log(user);

//   if (!user || user.count !== data.count) {
//     return next();
//   }

//   const tokens = createTokens(user);

//   res.cookie("refresh-token", tokens.refreshToken);
//   res.cookie("access-token", tokens.accessToken);
//   req.userId = user.id;

//   next();
// });

app.use(async (req, res, next) => {
  const refreshToken = req.cookies["refresh-token"];
  const accessToken = req.cookies["access-token"];
  if (!refreshToken && !accessToken) {
    return next();
  }

  try {
    const data = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.userId = data.userId;
    return next();
  } catch {}

  if (!refreshToken) {
    return next();
  }

  let data;

  try {
    data = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  } catch {
    return next();
  }

  const user = await User.findOne({ id: data.userId });

  // token has been invalidated
  if (!user || user.count !== data.count) {
    return next();
  }

  const tokens = createTokens(user);

  res.cookie("refresh-token", tokens.refreshToken);
  res.cookie("access-token", tokens.accessToken);
  req.userId = user.id;

  next();
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
