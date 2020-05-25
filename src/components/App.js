import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { HeadlineContainer } from './containers/HeadlineContainer'
import { AuthContainer } from './containers/AuthContainer'
import { TournamentsContainer } from './containers/TournamentsContainer'

import { Side } from './ui/Side'
import { About } from './ui/About'
import { Support } from './ui/Support/Support'
import { FAQ } from './ui/FAQ/FAQ'


import './../css/App.css'

export const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [titleOfPage, setTitleOfPage] = useState('Authentication')

  useEffect(() => {
    if (titleOfPage) {
      document.title = titleOfPage
    }
  }, [titleOfPage])

  return (
    <div className="bd-app">
      <Router>
        <HeadlineContainer
          isAuthenticated={isAuthenticated}
          setAuthenticated={setAuthenticated}
          setTitleOfPage={setTitleOfPage}
        />

        {(isAuthenticated) ? <Side /> : ''}

        <Switch>
          {(!isAuthenticated)
          ?
            <Route
              path="/"
              render={() => <AuthContainer setAuthenticated={setAuthenticated} setTitleOfPage={setTitleOfPage} />}
              exact
            />
          :
            <Route
              path="/"
              render={() => <TournamentsContainer />}
              exact
            />
          }
          <Route path="/about" render={() => <About isAuthenticated={isAuthenticated} />} />

          {(isAuthenticated) ?
            <Route
              path="/support"
              render={() => <Support />}
              exact 
            />
          : ''}

          {(isAuthenticated) ?
            <Route
              path="/faq"
              render={() => <FAQ />}
              exact
            />
          : ''}
          
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}
