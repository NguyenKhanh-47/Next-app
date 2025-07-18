// src/graphql/queries/getPosts.ts
import { gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const CREATE_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!) {
    register(input: { name: $name, email: $email, password: $password }) {
      access_token
    }
  }
`;

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      access_token
    }
  }
`;

export { CREATE_USER, GET_USERS, LOGIN_USER };
