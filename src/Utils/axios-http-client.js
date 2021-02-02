import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/users/'
})
api.defaults.headers.authorization = `Basic ${btoa(
  `${process.env.REACT_APP_GITHUB_AUTH_USERNAME}:${process.env.REACT_APP_GITHUB_AUTH_PERSONAL_TOKEN}`
)}`

export const getUser = (path, options) => {
  return api.get(path, options)
}
