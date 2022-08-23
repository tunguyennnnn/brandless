import gql from 'graphql-tag';

export const BRANDS_QUERY = gql`
  {
    brandData: brands(limit: 20) {
      pageInfo {
        hasNextPage
      }
      totalCount

      edges {
        node {
          id
          name
          logo
        }
      }
    }
  }
`;
