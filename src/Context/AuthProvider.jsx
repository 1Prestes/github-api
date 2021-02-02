import React from 'react'
import PropTypes from 'prop-types'

import Context from './AuthContext'
import { setCookie as setToken, getCookie } from '../Utils/storageCookie'

const AuthProvider = ({ children }) => {
  const token = getCookie(
    process.env.REACT_APP_GITHUB_USER_COOKIE_NAME || '@GITHUB_USER_TOKEN_AUTH'
  )

  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  )
}

export default AuthProvider

AuthProvider.propTypes = {
  children: PropTypes.array
}
