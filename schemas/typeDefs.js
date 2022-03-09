const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    _id: ID!
    title: String!
    text: String!
    authorUsername: String!
  }

  type User {
    _id: ID!
    userName: String!
    text: String!
    authorUsername: String!
    posts: [Post]!
  }

  type Community {
    title: String!
    description: String
    image: String
    relatedPosts: [Post]
  }

  type Comments {
    text: String!
    contentType: String!
    authorUsername: String!
    communityId: Int
    comments: String!
    reactions: Int
  }

  type Query {
    Post: [Post]
    User: [User]
    Community: [Community]
    Comments: [Comments]
  }

  type Mutation {
    createPost(title: String!, text: String!, authorUsername: String!): Post
    createCommunity(title: String!): Community
    createComments(_id: String!): Comments
  }
`;

module.exports = typeDefs;
