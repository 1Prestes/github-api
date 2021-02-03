import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthProvider from './Context/AuthProvider'
import PrivateRoutes from './Components/PrivateRoutes'

import SignIn from './Pages/Sign-in'
import Profile from './Pages/Profile'
import User from './Pages/User'
import Repositories from './Pages/Repositories'
import Followers from './Pages/Followers'
import Following from './Pages/Following'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact path='/' component={SignIn} />
          <PrivateRoutes path='/perfil' component={Profile} />
          <PrivateRoutes path='/user/:login' component={User} />
          <PrivateRoutes exact path='/repos' component={Repositories} />
          <PrivateRoutes path='/seguidores' component={Followers} />
          <PrivateRoutes path='/seguindo' component={Following} />
        </AuthProvider>
      </Switch>
    </Router>
  )
}

export default Routes
