/* eslint-disable camelcase */
import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import AuthContext from '../Context/AuthContext'
import GenerateToken from '../FakeServices/generate-jwt'

import { IconContext } from 'react-icons'
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai'
import { getUser } from '../Utils/axios-http-client'
import useLocalStorage from '../Utils/useLocalStorage'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 48px 0;
  width: 90%;
  max-width: 500px;
`

const Input = styled.input`
  background-color: #fff;
  padding: 16px;
  border: 1px #e5e5e5 solid;
  border-radius: 12px;
  font-size: 1.25em;
  color: #535353;
  box-shadow: #0000001d 0px 3px 6px;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffce00;
  margin-top: 19px;
  padding: 16px;
  border-radius: 12px;
  text-transform: uppercase;
  font-size: 1.25em;
  font-weight: bold;
  color: #030202;
  box-shadow: #0000001d 0px 3px 6px;
`

const Login = () => {
  const { token, setToken } = useContext(AuthContext)
  const [user, setUser] = React.useState('')
  const history = useHistory()
  const [gitUserData, setGitUserData] = useLocalStorage(
    process.env.REACT_APP_STORAGE_KEY || '@GitHub-API-UserDataResponse',
    {}
  )

  useEffect(() => {
    if (token) return history.push('/perfil')
    if (gitUserData && !token) {
      localStorage.removeItem(
        process.env.REACT_APP_STORAGE_KEY || '@GitHub-API-UserDataResponse'
      )
    }
  }, [token])

  const onChange = e => {
    setUser(e.target.value)
  }

  const signIn = token => {
    if (!token) return null
    return setToken(
      process.env.REACT_APP_GITHUB_USER_COOKIE_NAME || '@GITHUB_USER_TOKEN_AUTH',
      token
    )
  }

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

    setGitUserData({
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
    })
    return { message: 'created' }
  }

  const onSubmit = async e => {
    e.preventDefault()
    if (!user.trim()) return

    try {
      const data = await getUser(`${user}`).then(res => res.data)
      const newToken = GenerateToken(data.login)

      userStorage(data)
      signIn(newToken)

      if (newToken) {
        history.push('/perfil')
      }
    } catch (err) {
      return err.message || 'User not found!'
    }
  }

  return (
    <Wrapper>
      <IconContext.Provider
        value={{ size: '8.625em', color: '#FFCE00', title: 'GitHub Icon' }}
      >
        <AiFillGithub />
      </IconContext.Provider>
      <Form>
        <Input
          onChange={onChange}
          type='text'
          name='user'
          placeholder='Usuário'
        />
        <IconContext.Provider
          value={{
            size: '1.2em',
            style: { marginLeft: '13px' },
            title: 'Arrow right'
          }}
        >
          <Button onClick={onSubmit}>
            ENTRAR
            <AiOutlineArrowRight />
          </Button>
        </IconContext.Provider>
      </Form>
    </Wrapper>
  )
}

export default Login
