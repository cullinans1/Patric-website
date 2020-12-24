import gql from "graphql-tag";

export const QUERY_ALL_BLOGS = gql`
  query {
    blogs {
      _id
      title
      image
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

