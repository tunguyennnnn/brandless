import gql from 'graphql-tag';

export const PRODUCT_QUERY = gql`
  query ($id: ID!) {
    productData: product(id: $id) {
      id
      name
      createdAt
      images
      link
      brand {
        id
        name
      }
      reviews {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            id
            content
            media
            createdAt
          }
        }
      }
    }
  }
`;
