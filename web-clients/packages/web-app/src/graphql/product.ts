import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
  query ($cursor: Date, $brandId: ID) {
    productData: products(limit: 20, cursor: $cursor, brandId: $brandId) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          name
          createdAt
          images
          link
          brand {
            id
            name
          }
        }
        cursor
      }
    }
  }
`;
