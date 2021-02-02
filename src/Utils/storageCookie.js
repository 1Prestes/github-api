import Cookies from 'universal-cookie'

const cookie = new Cookies()

const defaultOptions = {
  path: '/'
}

export const setCookie = (name, value, options = {}) => {
  if (!name || value === undefined) return null

  cookie.set(name, value, { ...defaultOptions, ...options })
}

export const getCookie = name => {
  if (!name) return null
  return cookie.get(name)
}
