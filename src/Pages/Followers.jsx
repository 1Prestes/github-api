import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiGithub } from 'react-icons/fi'
import { BiHomeAlt, BiGroup } from 'react-icons/bi'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #1f1f1f;
  height: 68px;
`

const ContentHeader = styled.p`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-left: -36px;
  font-size: 1.0625em;
  color: #fff;
`
const Back = styled.div`
  padding-left: 17px;
`

const FollowerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #7070705a;
  margin-top: 20px;
  color: white;

  p {
    font-size: 0.9375em;
    margin: 0 28px;
    line-height: 24px;
  }
`

const UserImage = styled.img`
  background-color: #6f6f6f;
  width: 64px;
  height: 64px;
  margin: 0px 32px 20px 0;
  border: 3px solid #fff;
  border-radius: 100px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 1em;
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
  margin-right: 18px;
`

const RepositoriesActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 25px 20px 0;
`

const Actions = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 7px;
    font-size: 0.9375em;
  }
`

const Navbar = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  color: #969696;
`

const NavLink = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  font-size: 0.9375em;
`

const Repositories = () => {
  return (
    <>
      <Header>
        <Back>
          <IconContext.Provider
            value={{
              size: '19px',
              color: '#FFF'
            }}
          >
            <AiOutlineArrowLeft />
          </IconContext.Provider>
        </Back>
        <ContentHeader>10 seguidores</ContentHeader>
      </Header>

      <FollowerInfo>
        <TitleContainer>
          <BorderLeft />
          <UserImage src='https://avatars.githubusercontent.com/u/2703782?s=400&u=a768140438376268588c9edd13b3f79eba6b1ee0&v=4' />
          <h3>#aniltonveiga</h3>
        </TitleContainer>
        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFF' }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </FollowerInfo>

      <FollowerInfo>
        <TitleContainer>
          <BorderLeft />
          <UserImage src='https://avatars.githubusercontent.com/u/2703782?s=400&u=a768140438376268588c9edd13b3f79eba6b1ee0&v=4' />
          <h3>#aniltonveiga</h3>
        </TitleContainer>
        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFF' }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </FollowerInfo>

      <FollowerInfo>
        <TitleContainer>
          <BorderLeft />
          <UserImage src='https://avatars.githubusercontent.com/u/2703782?s=400&u=a768140438376268588c9edd13b3f79eba6b1ee0&v=4' />
          <h3>#aniltonveiga</h3>
        </TitleContainer>
        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFF' }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </FollowerInfo>

      <FollowerInfo>
        <TitleContainer>
          <BorderLeft />
          <UserImage src='https://avatars.githubusercontent.com/u/2703782?s=400&u=a768140438376268588c9edd13b3f79eba6b1ee0&v=4' />
          <h3>#aniltonveiga</h3>
        </TitleContainer>
        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFF' }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </FollowerInfo>

      <FollowerInfo>
        <TitleContainer>
          <BorderLeft />
          <UserImage src='https://avatars.githubusercontent.com/u/2703782?s=400&u=a768140438376268588c9edd13b3f79eba6b1ee0&v=4' />
          <h3>#aniltonveiga</h3>
        </TitleContainer>
        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFF' }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </FollowerInfo>

      <FollowerInfo>
        <TitleContainer>
          <BorderLeft />
          <UserImage src='https://avatars.githubusercontent.com/u/2703782?s=400&u=a768140438376268588c9edd13b3f79eba6b1ee0&v=4' />
          <h3>#aniltonveiga</h3>
        </TitleContainer>
        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFF' }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </FollowerInfo>

      <FollowerInfo>
        <TitleContainer>
          <BorderLeft />
          <UserImage src='https://avatars.githubusercontent.com/u/2703782?s=400&u=a768140438376268588c9edd13b3f79eba6b1ee0&v=4' />
          <h3>#aniltonveiga</h3>
        </TitleContainer>
        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFF' }}>
              <AiOutlineArrowRight />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </FollowerInfo>

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

export default Repositories
