import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login'
import User from './Pages/User'
import Repositories from './Pages/Repositories'
import Followers from './Pages/Followers'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/user' component={User} />
        <Route exact path='/repos' component={Repositories} />
        <Route path='/followers' component={Followers} />
        <Route path='*' component={Login} />
      </Switch>
    </Router>
  )
}

export default Routes
