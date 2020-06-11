import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// eslint-disable-next-line
import { PageAuth } from './Pages/PageAuth'
// eslint-disable-next-line
import { PagePreferences } from './Pages/PagePreferences'
import { PageHub } from './Pages/PageHub'
import { authenticateUser } from './../utils/actions'
import { GET_USER } from './../utils/queries'
import Loading from './../img/loading.svg'

import 'react-circular-progressbar/dist/styles.css'
import './../css/App.css'

export const App = () => {
  // eslint-disable-next-line
  const content = useSelector(state => state)
  const dispatch = useDispatch()
  const [getUser, { loading, data }] = useLazyQuery(GET_USER)

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('user'))
    if (id !== undefined) {
      getUser({ variables: { id }})
    }
  }, [getUser])

  useEffect(() => {
    if (data && data.getUser) {
      dispatch(authenticateUser(data.getUser))
    }
  }, [data, dispatch])

  if (loading) return (
    <div className="bd-loading">
      <img src={Loading} alt="Loading" />
    </div>
  )

  return (
    <Router>
      <Switch>
        <Route to="/" component={PageHub} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}
