import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import { AuthContainer } from './containers/AuthContainer'
import { HubContainer } from './containers/HubContainer'

import './../css/App.css'

export const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true')

  return (
      <Router>
        {(!isAuthenticated &&
          <AuthContainer
            setAuthenticated={setAuthenticated}
          />
        )}

        {(isAuthenticated &&
          <HubContainer
            setAuthenticated={setAuthenticated}
          />
        )}

        <Switch>
          <Redirect to="/" />
        </Switch>
      </Router>
  )
}
