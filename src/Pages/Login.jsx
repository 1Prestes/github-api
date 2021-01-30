import React from 'react'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 48px 0;
  width: 90%;
  max-width: 500px;
`

const Input = styled.input`
  background-color: #fff;
  padding: 16px;
  border: 1px #e5e5e5 solid;
  border-radius: 12px;
  font-size: 1.25em;
  color: #535353;
  box-shadow: #0000001d 0px 3px 6px;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffce00;
  margin-top: 19px;
  padding: 16px;
  border-radius: 12px;
  text-transform: uppercase;
  font-size: 1.25em;
  font-weight: bold;
  color: #030202;
  box-shadow: #0000001d 0px 3px 6px;
`

const Login = () => {
  return (
    <Wrapper>
      <IconContext.Provider
        value={{ size: '8.625em', color: '#FFCE00', title: 'GitHub Icon' }}
      >
        <AiFillGithub />
      </IconContext.Provider>
      <Form>
        <Input type='text' name='user' placeholder='Usuário' />
        <IconContext.Provider
          value={{
            size: '1.2em',
            style: { marginLeft: '13px' },
            title: 'Arrow right'
          }}
        >
          <Button>
            ENTRAR
            <AiOutlineArrowRight />
          </Button>
        </IconContext.Provider>
      </Form>
    </Wrapper>
  )
}

export default Login
