import React from 'react'
import BrowserRouter from 'react-router/BrowserRouter'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import App from './app'

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin',
  },
})
const client = new ApolloClient({
  networkInterface,
  shouldBatch: true
})

const Root = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)

export default Root
