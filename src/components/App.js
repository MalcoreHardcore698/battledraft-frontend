import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { PageAuth } from './ui/Pages/PageAuth'
import { PagePerfomance } from './ui/Pages/PagePerfomance'
import { PageHub } from './ui/Pages/PageHub'
import './../css/App.css'

export const App = () => {
  const content = useSelector(state => state)

  return (
    <Router>
      <Switch>
        {
          (content.user && !content.user.preferences) ?
            <Route to="/perfomance" component={PagePerfomance} /> :
          (content.user) ?
            <Route to="/" component={PageHub} /> :
            <Route to="/" component={PageAuth} />
        }
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}
