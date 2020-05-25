import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import storeFactory from './storeFactory'

import './index.css'

import { App } from './components/App'

import * as serviceWorker from './serviceWorker'

const store = storeFactory

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()