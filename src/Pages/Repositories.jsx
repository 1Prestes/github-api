import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FiUnlock, FiLock } from 'react-icons/fi'
import { AiOutlineArrowLeft, AiOutlineStar } from 'react-icons/ai'

import Navbar from '../Components/Navbar'
import { getData } from '../Utils/axios-http-client'
import Container from '../Components/Container'

const Header = styled.ul`
  display: flex;
  align-items: center;
  background-color: #1f1f1f;
  height: 68px;
  margin-bottom: 40px;
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
  padding-left: 17px;

  a {
    width: 50px;
  }
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

const Repositories = () => {
  const getUserData = localStorage.getItem(process.env.REACT_APP_STORAGE_KEY)
  const userData = JSON.parse(getUserData)
  const [repos, setRepos] = useState(null)

  useEffect(async () => {
    try {
      const data = await getData(`${userData.login}/repos`).then(
        res => res.data
      )
      setRepos(data)
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
            <Link to='/user'>
              <AiOutlineArrowLeft />
            </Link>
          </Back>
        </IconContext.Provider>
        <ContentHeader>{userData.public_repos} repositórios</ContentHeader>
      </Header>

      <Container>
        {repos &&
          repos.map(repo => (
            <RepositorieInfo key={repo.id}>
              <TitleContainer>
                <BorderLeft />
                <h3>{repo.name}</h3>
              </TitleContainer>
              <p>
                {repo.description ||
                  'Nenhuma descrição, site ou tópicos fornecidos.'}
              </p>

              <RepositoriesActions>
                <Actions>
                  <IconContext.Provider
                    value={{ size: '17px', color: '#FFCE00' }}
                  >
                    <AiOutlineStar />
                    <p>{repo.stargazers_count}</p>
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
                  <IconContext.Provider
                    value={{ size: '17px', color: '#CC042A' }}
                  >
                    <FiLock />
                  </IconContext.Provider>
                </Actions>
              </RepositoriesActions>
            </RepositorieInfo>
          ))}
      </Container>

      <Navbar />
    </>
  )
}

export default Repositories
