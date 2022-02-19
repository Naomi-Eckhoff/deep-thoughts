import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  query thouhts($username: String) {
    thoughts(username: $username) {
      _id
      thouhtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;