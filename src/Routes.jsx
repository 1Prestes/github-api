import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthProvider from './Context/AuthProvider'
import PrivateRoutes from './Components/PrivateRoutes'

import SignIn from './Pages/Sign-in'
import User from './Pages/User'
import Repositories from './Pages/Repositories'
import Followers from './Pages/Followers'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact path='/' component={SignIn} />
          <PrivateRoutes path='/perfil' component={User} />
          <PrivateRoutes exact path='/repos' component={Repositories} />
          <PrivateRoutes path='/seguidores' component={Followers} />
        </AuthProvider>
      </Switch>
    </Router>
  )
}

export default Routes
