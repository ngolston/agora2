const { Post, User, Community, Comments } = require("../models");

const resolvers = {
  Query: {
    Post: async () => {
      return Post.find({});
    },
    User: async () => {
      return User.find({});
    },
    Community: async () => {
      return Community.find({});
    },
    Comments: async () => {
      return Comments.find({});
    },
  },
  Mutation: {
    createPost: async (parent, args) => {
      const { title, text, authorUsername } = args;
      return await Post.create({ title, text, authorUsername });
    },
    createCommunity: async (parent, args) => {
      const { title } = args;
      return await Community.create({ title });
    },
  },
};

module.exports = resolvers;
