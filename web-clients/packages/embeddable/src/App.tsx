import React from 'react';
import { useQuery } from '@apollo/client';
import './App.css';

import { ReviewContainer } from './containers';
import { PRODUCT_QUERY } from './graphql/product';

function App() {
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: {
      id: '1',
    },
  });

  console.log('loading, error, data', loading, error, data);

  if (!data) {
    return null;
  }

  const { productData } = data;
  const reviews = productData.reviews.edges;
  return <ReviewContainer reviews={reviews} />;
}

export default App;
