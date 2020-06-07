import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import { App } from './components/App'

import * as serviceWorker from './serviceWorker'
import storeFactory from './storeFactory'
import './index.css'

const client = new ApolloClient({
  uri: 'http://api.battledraft.ru/graphql',
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