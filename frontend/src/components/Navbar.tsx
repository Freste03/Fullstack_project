import styled from 'styled-components';
import logo from '../assets/sneakers-experten_logo.png'
import SearchBar from './SearchBar';



import {
  Link,
  Outlet
} from 'react-router-dom'

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
  color: #FFFFFF;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`


function Navbar() {



  return (
    <>
    <Content>
    <Header>
      <Nav>
        <ImgLink><Link to='/'><IMG src={logo} alt='Sneakers-experten logo'></IMG></Link></ImgLink>
        <SearchBar />
        <Link to='/cart'><Svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
        </Svg></Link>
      </Nav>
    </Header>
    <SecondNav>
      <StyledLink to='/brand/nike'><P>NIKE</P></StyledLink>
      <StyledLink to='/brand/adidas'><P>ADIDAS</P></StyledLink>
      <StyledLink to='/brand/vans'><P>VANS</P></StyledLink>
      <StyledLink to='/brand/puma'><P>PUMA</P></StyledLink>
      <StyledLink to='/brand/new balance'><P>NEW BALANCE</P></StyledLink>
      <StyledLink to='/brand/reebook'><P>REEBOOK</P></StyledLink>
      <StyledLink to='/brand/jordan'><P>JORDAN</P></StyledLink>
      <StyledLink to='/brand/yeezy'><P>YEEZY</P></StyledLink>
    </SecondNav>
    </Content>
    <Outlet />
    </>
  )
}

export default Navbar
