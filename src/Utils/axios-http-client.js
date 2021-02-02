import axios from 'axios'

export const baseUrl = path => {
  return `https://api.github.com/users/${path}`
}

export const getUser = (path, options) => {
  const url = baseUrl(path)

  return axios.get(url, options)
}
