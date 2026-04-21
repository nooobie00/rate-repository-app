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

const REVIEW_DETAILS = gql`
  fragment reviewDetails on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
    repositoryId
  }
`;

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $order: AllRepositoriesOrderBy
    $direction: OrderDirection
    $keyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $order
      orderDirection: $direction
      searchKeyword: $keyword
      after: $after
      first: $first
    ) {
      edges {
        node {
          ...basicDetails
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${BASIC_DETAILS}
`;

export const GET_USER = gql`
  query getUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...reviewDetails
          }
        }
      }
    }
  }
  ${REVIEW_DETAILS}
`;

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...basicDetails
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...reviewDetails
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
  ${BASIC_DETAILS}
  ${REVIEW_DETAILS}
`;
