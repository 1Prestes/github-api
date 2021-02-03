import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Box = styled.div`
  margin-bottom: 90px;
`

const Container = ({ children }) => {
  return <Box>{children}</Box>
}

export default Container

Container.propTypes = {
  children: PropTypes.array
}
