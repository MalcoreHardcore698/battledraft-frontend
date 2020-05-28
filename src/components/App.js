import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { HubContainer } from './containers/HubContainer'

import './../css/App.css'

export const App = () => {
  return (
      <Router>
        <HubContainer />
      </Router>
  )
}
