const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    blogs: [Blog]
  }
  type Auth {
    token: ID
    user: User
  }
  type Blog {
      _id: ID
      title: String
      image: String
      content: String
      link: String
  }

  type Query {
      blogs: [Blog]
      user: [User]
  }

  type Mutation{
    addUser(
        name: String!
        email: String!
        password: String!
    ): Auth
    addBlog(
        title: String!
        image: String
        content: String!
        link: String
    ): Blog
    login(
        email: String!, password: String!
    ): Auth
  }
  
`;
module.exports = typeDefs;