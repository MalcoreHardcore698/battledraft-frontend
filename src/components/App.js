import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { HeadlineContainer } from './containers/HeadlineContainer'
import { AuthContainer } from './containers/AuthContainer'
import { TournamentsContainer } from './containers/TournamentsContainer'
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

        <Switch>
          {(!isAuthenticated) ?
            <Route
              path="/"
              render={() => <AuthContainer setAuthenticated={setAuthenticated} setTitleOfPage={setTitleOfPage} />}
              exact
            /> :
            <Route
              path="/"
              render={() => <TournamentsContainer />}
            />
          }
          <Route path="/about" render={() => <About />} />
          {(isAuthenticated) ? <Route path="/support" render={() => <Support />} /> : ''}
          {(isAuthenticated) ? <Route path="/faq" render={() => <FAQ />} /> : ''}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}
