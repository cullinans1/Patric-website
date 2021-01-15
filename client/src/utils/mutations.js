import gql from "graphql-tag";

export const ADD_BLOG = gql`
  mutation addBlog(
    $title: String!
    $image: String
    $description: String!
    $content: String!
    $link: String
  ) {
    addBlog(
      title: $title
      image: $image
      description: $description
      content: $content
      link: $link
    ) {
      title
      image
      content
      link
    }
  }
`;

export const EDIT_BLOG = gql`
  mutation editBlog(
    $_id: ID!
    $title: String
    $image: String
    $description: String
    $content: String
    $link: String
  ) {
    editBlog(
      title: $title
      image: $image
      description: $description
      content: $content
      link: $link
    ) {
      title
      image
      description
      content
      link
    }
  }
`;

export const DELETE_BLOG = gql`
  mutation deleteBlog( $_id: ID! ){
    deleteBlog( _id: $_id) {
      _id
    }
  }
`;

export const CONTACT_ME = gql`
  mutation contactMe(
    $name: String!
    $email: String!
    $phone: String!
    $message: String!
  ) {
    contactMe(name: $name, email: $email, phone: $phone, message: $message) {
      name
      email
      phone
      message
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
