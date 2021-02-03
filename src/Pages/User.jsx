import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FiLogIn } from 'react-icons/fi'

import { getData } from '../Utils/axios-http-client'
import Navbar from '../Components/Navbar'
import BackButton from '../Components/BackButton'
import useLocalStorage from '../Utils/useLocalStorage'
import FilterUserData from '../Utils/filterUserData'
import {
  Header,
  NavItem,
  FlexCenter,
  UserImage,
  TitleContainer,
  UserName,
  UserInfo,
  Actions
} from '../Components/UserComponentsSnnipets'
import { BorderLeft } from '../Components/BorderLeft'

const User = () => {
  const history = useHistory()
  const { login } = useParams()
  const [userData, setUserData] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [gitUserData, setGitUserData] = useLocalStorage(
    process.env.REACT_APP_STORAGE_KEY || '@GitHub-API-UserDataResponse',
    {}
  )
  useEffect(async () => {
    try {
      const data = await getData(`${login}`).then(res => res.data)
      setUserData(data)
    } catch (err) {
      return err.message || 'Unexpected error'
    }
  }, [])

  const changeUser = async () => {
    const data = await FilterUserData(userData.login)
    if (data) {
      setGitUserData(data)
      history.push('/perfil')
    }
  }

  return (
    <>
      {userData && (
        <Header>
          <BackButton to='/seguidores' />
          <NavItem>#{userData.login}</NavItem>
          <IconContext.Provider
            value={{
              size: '19px',
              color: '#5CBC29',
              style: { margin: '0 12px' }
            }}
          >
            <NavItem onClick={changeUser}>
              Salvar <FiLogIn />
            </NavItem>
          </IconContext.Provider>
        </Header>
      )}

      {userData && (
        <UserInfo>
          <FlexCenter>
            <UserImage src={userData.avatar_url} />
          </FlexCenter>
          <TitleContainer>
            <BorderLeft />
            <UserName>{userData.name}</UserName>
          </TitleContainer>
          <p>{userData.company && userData.company}</p>
          <p>{userData.email && userData.email}</p>
          <p>{userData.location && userData.location}</p>
          <p>{userData.blog && userData.blog}</p>
          <FlexCenter>
            <Actions>
              <h3>{(userData.followers && userData.followers) || 0}</h3>
              <p>Seguidores</p>
            </Actions>
            <Actions>
              <h3>{(userData.following && userData.following) || 0}</h3>
              <p>Seguindo</p>
            </Actions>
            <Actions>
              <h3>{(userData.public_repos && userData.public_repos) || 0}</h3>
              <p>Repos</p>
            </Actions>
          </FlexCenter>
          <TitleContainer>
            <BorderLeft />
            <h3>BIO</h3>
          </TitleContainer>
          <p>{(userData.bio && userData.bio) || 'Biografia não disponível'}</p>
        </UserInfo>
      )}
      <Navbar />
    </>
  )
}

export default User
