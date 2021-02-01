import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { FiGithub, FiUnlock, FiLock } from 'react-icons/fi'
import { BiHomeAlt, BiGroup } from 'react-icons/bi'
import { AiOutlineArrowLeft, AiOutlineStar } from 'react-icons/ai'

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #1f1f1f;
  height: 68px;
  margin-bottom: 40px;
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

const RepositorieInfo = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #7070705a;
  margin-top: 20px;
  color: white;

  p {
    font-size: 0.9375em;
    margin: 0 28px;
    line-height: 24px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 1.25em;
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
  margin: 20px 28px 35px;
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
  position: sticky;
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
        <ContentHeader>10 repositórios</ContentHeader>
      </Header>

      <RepositorieInfo>
        <TitleContainer>
          <BorderLeft />
          <h3>brasiliapp-react-native</h3>
        </TitleContainer>
        <p>Repository for centralization of the BrasiliApp mobile project</p>

        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFCE00' }}>
              <AiOutlineStar />
              <p> 32</p>
            </IconContext.Provider>
          </Actions>
          <Actions>
            <IconContext.Provider
              value={{
                size: '17px',
                color: '#63BF1F',
                style: { margin: '0 13px' }
              }}
            >
              <FiUnlock />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '17px', color: '#CC042A' }}>
              <FiLock />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </RepositorieInfo>
      <RepositorieInfo>
        <TitleContainer>
          <BorderLeft />
          <h3>brasiliapp-react-native</h3>
        </TitleContainer>
        <p>Repository for centralization of the BrasiliApp mobile project</p>

        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFCE00' }}>
              <AiOutlineStar />
              <p> 32</p>
            </IconContext.Provider>
          </Actions>
          <Actions>
            <IconContext.Provider
              value={{
                size: '17px',
                color: '#63BF1F',
                style: { margin: '0 13px' }
              }}
            >
              <FiUnlock />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '17px', color: '#CC042A' }}>
              <FiLock />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </RepositorieInfo>
      <RepositorieInfo>
        <TitleContainer>
          <BorderLeft />
          <h3>brasiliapp-react-native</h3>
        </TitleContainer>
        <p>Repository for centralization of the BrasiliApp mobile project</p>

        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFCE00' }}>
              <AiOutlineStar />
              <p> 32</p>
            </IconContext.Provider>
          </Actions>
          <Actions>
            <IconContext.Provider
              value={{
                size: '17px',
                color: '#63BF1F',
                style: { margin: '0 13px' }
              }}
            >
              <FiUnlock />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '17px', color: '#CC042A' }}>
              <FiLock />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </RepositorieInfo>
      <RepositorieInfo>
        <TitleContainer>
          <BorderLeft />
          <h3>brasiliapp-react-native</h3>
        </TitleContainer>
        <p>Repository for centralization of the BrasiliApp mobile project</p>

        <RepositoriesActions>
          <Actions>
            <IconContext.Provider value={{ size: '17px', color: '#FFCE00' }}>
              <AiOutlineStar />
              <p> 32</p>
            </IconContext.Provider>
          </Actions>
          <Actions>
            <IconContext.Provider
              value={{
                size: '17px',
                color: '#63BF1F',
                style: { margin: '0 13px' }
              }}
            >
              <FiUnlock />
            </IconContext.Provider>
            <IconContext.Provider value={{ size: '17px', color: '#CC042A' }}>
              <FiLock />
            </IconContext.Provider>
          </Actions>
        </RepositoriesActions>
      </RepositorieInfo>
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
