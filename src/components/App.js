import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { AuthContainer } from './containers/AuthContainer'
import { HubContainer } from './containers/HubContainer'

import './../css/App.css'

export const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState(null)

  return (
    <div className={`bd-app${(backgroundColor) ? ' ' + backgroundColor : ' default'}`}>
      <Router>
        <Switch>
          {(!isAuthenticated)
          ?
            <Route
              path="/"
              render={() => <AuthContainer setAuthenticated={setAuthenticated} />}
              exact
            />
          :
            <Route
              path="/"
              render={() => <HubContainer setBackgroundColor={setBackgroundColor} />}
              exact
            />
          }
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}
