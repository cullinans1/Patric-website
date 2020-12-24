import gql from "graphql-tag";

export const ADD_BLOG = gql`
  mutation addBlog(
    $title: String!
    $image: String
    $content: String!
    $link: String
  ) {
    addBlog(title: $title, image: $image, content: $content, link: $link) {
      title
      image
      content
      link
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
      }
    }
  }
`;