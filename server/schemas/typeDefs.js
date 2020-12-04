const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    posts: [Post]
  }
  type Auth {
    token: ID
    user: User
  }
  type Post {
      _id: ID
      title: String
      image: String
      content: String
      link: String
  }

  type Query {
      posts: [Post]
  }

  type Mutation{
    addUser(
        name: String!
        email: String!
        password: String!
    ): Auth
    addPost(
        title: String!
        image: String
        content: String!
        link: String
    ): Post
    login(
        email: String!, password: String!
    ): Auth
  }
  
`;
module.exports = typeDefs;