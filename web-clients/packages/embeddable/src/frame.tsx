import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('mount') as HTMLElement
);

const client = new ApolloClient({
  uri: '/query',
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
