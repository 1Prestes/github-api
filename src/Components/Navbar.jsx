import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { BiGroup, BiHomeAlt } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`

const NavLink = styled.li`
  font-size: 0.9375em;
  padding: 16px;

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    color: #3e3e3e;
    svg {
      color: #000;
    }
  }
`

export const Navbar = () => {
  return (
    <Nav>
      <IconContext.Provider value={{ size: '30px' }}>
        <NavLink>
          <Link to='/user'>
            <BiHomeAlt />
            Home
          </Link>
        </NavLink>
        <NavLink>
          <Link to='/repos'>
            <FiGithub />
            Repos
          </Link>
        </NavLink>
        <NavLink>
          <Link to='/followers'>
            <BiGroup />
            Seguidores
          </Link>
        </NavLink>
        <NavLink>
          <Link to='/followers'>
            <BiGroup />
            Seguindo
          </Link>
        </NavLink>
      </IconContext.Provider>
    </Nav>
  )
}

export default Navbar
