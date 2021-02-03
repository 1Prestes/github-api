import styled from 'styled-components'

export const UserInfo = styled.div`
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
export const UserImage = styled.img`
  background-color: #6f6f6f;
  width: 115px;
  height: 115px;
  margin-top: -60px;
  margin-bottom: 45px;
  border: 3px solid #fff;
  border-radius: 100px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 1.625em;
    font-weight: bold;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 126px;
  background-color: #1f1f1f;
`

export const NavItem = styled.li`
  display: flex;
  color: #fff;
  font-size: 1.0625em;
  padding: 23px 11px;
  cursor: pointer;
`

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const UserName = styled.h1`
  color: #fff;
  font-size: 1.625em;
  font-weight: bold;
  margin-right: 15px;
`

export const Actions = styled.div`
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
