import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Context from './AuthContext'

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  )
}

export default AuthProvider

AuthProvider.propTypes = {
  children: PropTypes.element
}
