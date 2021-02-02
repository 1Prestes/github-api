import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthProvider from './Context/AuthProvider'
import PrivateRoutes from './Components/PrivateRoutes'

import Login from './Pages/Login'
import User from './Pages/User'
import Repositories from './Pages/Repositories'
import Followers from './Pages/Followers'

const Routes = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoutes path='/user' component={User} />
          <PrivateRoutes exact path='/repos' component={Repositories} />
          <PrivateRoutes path='/followers' component={Followers} />
          <Route path='*' component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default Routes
