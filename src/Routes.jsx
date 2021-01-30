import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login'
import User from './Pages/User'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/user' component={User} />
      </Switch>
    </Router>
  )
}

export default Routes
