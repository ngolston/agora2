//Fixed the Project

const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const dbo = require("./db/conn");

const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");
const jwt = require("jsonwebtoken");

// get driver connection

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });
}

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  await User.findOne({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  });

  if (User) {
    const token = jwt.sign(
      {
        userName: User.userName,
        email: User.email,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

dbo.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
});
