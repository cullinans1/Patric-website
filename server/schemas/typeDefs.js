const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
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
      
  }
`;
