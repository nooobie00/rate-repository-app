import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query getRepositories {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          ownerAvatarUrl
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    me {
      id
      username
    }
  }
`;
