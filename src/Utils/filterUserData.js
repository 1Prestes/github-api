/* eslint-disable camelcase */
import { getData } from './axios-http-client'

const FilterUserData = async login => {
  const userStorage = data => {
    const {
      login,
      name,
      email,
      location,
      company,
      bio,
      avatar_url,
      followers_url,
      following_url,
      organizations_url,
      starred_url,
      public_repos,
      repos_url,
      public_gists,
      followers,
      following
    } = data

    return {
      login,
      name,
      email,
      location,
      company,
      bio,
      avatar_url,
      followers_url,
      following_url,
      organizations_url,
      starred_url,
      public_repos,
      repos_url,
      public_gists,
      followers,
      following
    }
  }

  const data = await getData(login).then(res => res.data)
  return userStorage(data)
}

export default FilterUserData
