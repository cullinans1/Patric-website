import gql from "graphql-tag";

export const QUERY_ALL_BLOGS = gql`
  query {
    blogs {
      _id
      title
      image
      description
      content
      link
    }
  }
`;

export const QUERY_SINGLE_BLOG = gql`
  query blog($_id: ID!) {
    blog(_id: $_id) {
      _id
      title
      image
      content
      link
    }
  }
`;

export const GET_CLIENTS = gql`
  query {
    clients {
      _id
      name
      email
      phone
      message
    }
  }
`;
