import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiLogOut, FiGithub } from 'react-icons/fi'
import { BiHomeAlt, BiGroup } from 'react-icons/bi'
import { removeCookie } from '../Utils/storageCookie'
import { useHistory } from 'react-router-dom'

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

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  p {
    font-size: 1.125em;
    margin-left: 24px;
    line-height: 24px;
  }
`

const UserImage = styled.img`
  background-color: #6f6f6f;
  width: 115px;
  height: 115px;
  margin-top: -60px;
  margin-bottom: 45px;
  border: 3px solid #fff;
  border-radius: 100px;
`

const UserName = styled.h1`
  color: #fff;
  font-size: 1.625em;
  font-weight: bold;
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

  h3 {
    font-size: 2.5em;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 1.0625em;
  }
`

const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  margin-top: 75px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: #969696;
`

const NavLink = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  font-size: 0.9375em;
`

const User = () => {
  const history = useHistory()

  const signOut = () => {
    removeCookie('userAuth')
    history.push('/')
  }

  return (
    <>
      <Header>
        <NavItem>#anilton.veiga</NavItem>
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
          <UserImage src='https://avatars.githubusercontent.com/u/2703782?s=400&u=a768140438376268588c9edd13b3f79eba6b1ee0&v=4' />
        </FlexCenter>
        <TitleContainer>
          <BorderLeft />
          <UserName>Anilton Veiga</UserName>
        </TitleContainer>
        <p>anilton.veigaa@gmail.com</p>
        <p>Itaí/SP</p>
        <FlexCenter>
          <Actions>
            <h3>32</h3>
            <p>Seguidores</p>
          </Actions>
          <Actions>
            <h3>32</h3>
            <p>Seguidores</p>
          </Actions>
          <Actions>
            <h3>32</h3>
            <p>Seguidores</p>
          </Actions>
        </FlexCenter>
        <TitleContainer>
          <BorderLeft />
          <h3>BIO</h3>
        </TitleContainer>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur.
        </p>
      </UserInfo>
      <Navbar>
        <IconContext.Provider value={{ size: '30px' }}>
          <NavLink style={{ color: '#000' }}>
            <BiHomeAlt value={{ style: { color: '#969696' } }} />
            Home
          </NavLink>
          <NavLink>
            <FiGithub />
            Repos
          </NavLink>
          <NavLink>
            <BiGroup />
            Seguidores
          </NavLink>
          <NavLink>
            <BiGroup />
            Seguindo
          </NavLink>
        </IconContext.Provider>
      </Navbar>
    </>
  )
}

export default User
