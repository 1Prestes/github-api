import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Back = styled.li`
  display: flex;
  a {
    padding: 17px;
    z-index: 10;
  }
`
const BackButton = ({ to, size = '19px', color = '#FFF' }) => {
  return (
    <IconContext.Provider
      value={{
        size,
        color
      }}
    >
      <Back>
        <Link to={to}>
          <AiOutlineArrowLeft />
        </Link>
      </Back>
    </IconContext.Provider>
  )
}

export default BackButton

BackButton.propTypes = {
  to: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string
}
