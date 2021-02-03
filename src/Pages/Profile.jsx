import React from 'react'
import { IconContext } from 'react-icons'
import { FiLogOut } from 'react-icons/fi'
import { removeCookie } from '../Utils/storageCookie'
import { Link, useHistory } from 'react-router-dom'
import Navbar from '../Components/Navbar'
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

const Profile = () => {
  const history = useHistory()
  const getProfileData = localStorage.getItem(process.env.REACT_APP_STORAGE_KEY)
  const profileData = JSON.parse(getProfileData)

  const signOut = () => {
    removeCookie(
      process.env.REACT_APP_GITHUB_USER_COOKIE_NAME || '@GITHUB_USER_TOKEN_AUTH'
    )
    history.push('/')
  }

  return (
    <>
      <Header>
        <NavItem>#{profileData.login && profileData.login}</NavItem>
        <IconContext.Provider
          value={{
            size: '19px',
            color: '#D03434',
            style: { margin: '0 12px' }
          }}
        >
          <NavItem onClick={signOut}>
            Sair <FiLogOut />
          </NavItem>
        </IconContext.Provider>
      </Header>

      <UserInfo>
        <FlexCenter>
          <UserImage src={profileData.avatar_url} />
        </FlexCenter>
        <TitleContainer>
          <BorderLeft />
          <UserName>{profileData.name || profileData.login}</UserName>
        </TitleContainer>
        <p>{profileData.company && profileData.company}</p>
        <p>{profileData.email && profileData.email}</p>
        <p>{profileData.location && profileData.location}</p>
        <p>{profileData.blog && profileData.blog}</p>
        <FlexCenter>
          <Actions>
            <Link to='/seguidores'>
              <h3>{(profileData.followers && profileData.followers) || 0}</h3>
              <p>Seguidores</p>
            </Link>
          </Actions>
          <Actions>
            <Link to='/seguindo'>
              <h3>{(profileData.following && profileData.following) || 0}</h3>
              <p>Seguindo</p>
            </Link>
          </Actions>
          <Actions>
            <Link to='/repos'>
              <h3>
                {(profileData.public_repos && profileData.public_repos) || 0}
              </h3>
              <p>Repos</p>
            </Link>
          </Actions>
        </FlexCenter>
        <TitleContainer>
          <BorderLeft />
          <h3>BIO</h3>
        </TitleContainer>
        <p>
          {(profileData.bio && profileData.bio) || 'Biografia não disponível'}
        </p>
      </UserInfo>
      <Navbar />
    </>
  )
}

export default Profile
