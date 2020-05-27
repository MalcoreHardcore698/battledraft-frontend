import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { HubContainer } from './containers/HubContainer'

import './../css/App.css'

export const App = () => {
  return (
      <Router>
        <Switch>
          <Route
            path="/"
            render={() => <HubContainer />}
            exact
          />
          <Redirect to="/" />
        </Switch>
      </Router>
  )
}
