import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Navbar from '../Components/Navbar'
import { getData } from '../Utils/axios-http-client'
import Container from '../Components/Container'
import { Link } from 'react-router-dom'

const Header = styled.ul`
  display: flex;
  align-items: center;
  background-color: #1f1f1f;
  height: 68px;
`

const ContentHeader = styled.li`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-left: -36px;
  font-size: 1.0625em;
  color: #fff;
`
const Back = styled.li`
  display: flex;
  a {
    padding: 17px;
    z-index: 10;
  }
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

const Repositories = () => {
  const getUserData = localStorage.getItem(process.env.REACT_APP_STORAGE_KEY)
  const userData = JSON.parse(getUserData)
  const [followers, setFollowers] = useState(null)

  useEffect(async () => {
    try {
      const data = await getData(`${userData.login}/followers`).then(
        res => res.data
      )
      setFollowers(data)
    } catch (err) {
      return err.message || 'Unexpected error'
    }
  }, [])

  return (
    <>
      <Header>
        <IconContext.Provider
          value={{
            size: '19px',
            color: '#FFF'
          }}
        >
          <Back>
            <Link to='/perfil'>
              <AiOutlineArrowLeft />
            </Link>
          </Back>
        </IconContext.Provider>
        <ContentHeader>{userData.followers} seguidores</ContentHeader>
      </Header>
      <Container>
        {followers &&
          followers.map(follow => (
            <FollowerInfo key={follow.id}>
              <TitleContainer>
                <BorderLeft />
                <UserImage src={follow.avatar_url} />
                <h3>#{follow.login}</h3>
              </TitleContainer>
              <RepositoriesActions>
                <Actions>
                  <IconContext.Provider value={{ size: '17px', color: '#FFF' }}>
                    <AiOutlineArrowRight />
                  </IconContext.Provider>
                </Actions>
              </RepositoriesActions>
            </FollowerInfo>
          ))}
      </Container>

      <Navbar />
    </>
  )
}

export default Repositories
