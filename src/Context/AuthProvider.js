import React from 'react'
import PropTypes from 'prop-types'

import Context from './AuthContext'
import { setCookie as setToken, getCookie } from '../Utils/storageCookie'

const AuthProvider = ({ children }) => {
  const token = getCookie('userAuth')

  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  )
}

export default AuthProvider

AuthProvider.propTypes = {
  children: PropTypes.array
}
