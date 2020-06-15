import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

import { App } from './components/App'

import * as serviceWorker from './serviceWorker'
import storeFactory from './storeFactory'
import './index.css'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql',
  }),
  cache: new InMemoryCache()
})

const store = storeFactory

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()