import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiLogOut } from 'react-icons/fi'
import { removeCookie } from '../Utils/storageCookie'
import { Link, useHistory } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 126px;
  background-color: #1f1f1f;
`

const NavItem = styled.li`
  display: flex;
  color: #fff;
  font-size: 1.0625em;
  padding: 23px 11px;
  cursor: pointer;
`

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 100px;

  p {
    font-size: 1.125em;
    margin-left: 24px;
    line-height: 24px;
  }
`

const ProfileImage = styled.img`
  background-color: #6f6f6f;
  width: 115px;
  height: 115px;
  margin-top: -60px;
  margin-bottom: 45px;
  border: 3px solid #fff;
  border-radius: 100px;
`

const ProfileName = styled.h1`
  color: #fff;
  font-size: 1.625em;
  font-weight: bold;
  margin-left: 15px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 1.625em;
    font-weight: bold;
  }
`

const BorderLeft = styled.div`
  background: #ffce00;
  width: 10px;
  height: 42px;
  border: 1px solid #ffce00;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  margin-right: 14px;
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 44px 0;
  padding: 16px 0;
  text-align: center;
  background-color: #5252525d;

  a {
    text-decoration: none;
    color: #fff;
  }

  h3 {
    font-size: 2.5em;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 1.0625em;
  }
`

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

      <ProfileInfo>
        <FlexCenter>
          <ProfileImage src={profileData.avatar_url} />
        </FlexCenter>
        <TitleContainer>
          <BorderLeft />
          <ProfileName>{profileData.name}</ProfileName>
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
              <h3>{(profileData.public_repos && profileData.public_repos) || 0}</h3>
              <p>Repos</p>
            </Link>
          </Actions>
        </FlexCenter>
        <TitleContainer>
          <BorderLeft />
          <h3>BIO</h3>
        </TitleContainer>
        <p>{(profileData.bio && profileData.bio) || 'Biografia não disponível'}</p>
      </ProfileInfo>
      <Navbar />
    </>
  )
}

export default Profile
