import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import AuthContext from '../Context/AuthContext'

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={() => (
        token
          ? <Component {...rest} />
          : <Redirect to='/' />)
      }
    />
  )
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  component: PropTypes.elementType
}
