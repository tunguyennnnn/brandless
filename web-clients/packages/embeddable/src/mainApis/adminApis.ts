import { request, gql } from 'graphql-request';

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

export async function login(token: string) {
  throw new Error('Not implemented');
}

export async function listProducts(): Promise<any> {
  const response = await request('/query', PRODUCTS_QUERY);

  console.log('response', response);
}
