const db = require("../db/conn");
const { Post, Community, User } = require("../models");
const postData = require("./postData.json");
const userData = require("./userData.json");
const communityData = require("./communityData.json");

db.once("open", async () => {
  await Post.deleteMany({});
  const post = await Post.insertMany(postData);
  console.log("Posts seeded!");

  await User.deleteMany({});
  const user = await User.insertMany(userData);
  console.log("Users seeded!");

  await Community.deleteMany({});
  const community = await Community.insertMany(communityData);
  console.log("Communities seeded!");

  process.exit(0);
});
