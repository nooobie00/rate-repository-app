import { gql } from "@apollo/client";

const BASIC_DETAILS = gql`
  fragment basicDetails on Repository {
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
`;

export const GET_REPOSITORIES = gql`
  query getRepositories {
    repositories {
      edges {
        node {
          ...basicDetails
        }
      }
    }
  }
  ${BASIC_DETAILS}
`;

export const GET_USER = gql`
  query getUser {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...basicDetails
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${BASIC_DETAILS}
`;
