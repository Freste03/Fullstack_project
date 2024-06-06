import styled from 'styled-components';
import logo from '../assets/sneakers-experten_logo.png'



/* import {
  Link,
  Outlet
} from 'react-router-dom' */

const Content = styled.div`
  position: fixed;
  z-index: 999;
`

const Header = styled.header`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1E1C1C;
  width: 100vw;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
`

const A = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    cursor: pointer;
`

const ImgLink = styled.a`
  flex-grow: 1;
`

const IMG = styled.img`
    width: 200px;
    margin-left: 0.5rem;
`

const Svg = styled.svg`
  margin: 0 0.5rem;
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #FF4545;
  }
`

const SecondNav = styled.nav`
  width: 100vw;
  height: 55px;
  background-color: #353535;
  display: flex;
  align-items: center;
  justify-content: center;
`

const P = styled.p`
  font-size: 1rem;
  padding-bottom: 5px;
  margin: 0 1rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    height: 4px;
    left: 0;
    bottom: 0;
    width: 0;
    background-color: #FF4545;
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`

function Navbar() {
  return (
    <Content>
    <Header>
      <Nav>
        <ImgLink><IMG src={logo} alt='Sneakers-experten logo'></IMG></ImgLink>
        <A><Svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
        </Svg>
        </A>
        <A><Svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>          </Svg>
        </A>
        <A><Svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
        </Svg>
        </A>
      </Nav>
    </Header>
    <SecondNav>
      <A><P>NIKE</P></A>
      <A><P>ADIDAS</P></A>
      <A><P>VANS</P></A>
      <A><P>PUMA</P></A>
      <A><P>NEW BALANCE</P></A>
      <A><P>REEBOOK</P></A>
      <A><P>JORDAN</P></A>
      <A><P>YEEZY</P></A>
    </SecondNav>
    </Content>
  )
}

export default Navbar
