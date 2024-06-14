import styled from 'styled-components'
import yeezy from '../assets/yeezy.jpg'
import { useNavigate } from 'react-router-dom'

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  margin-top: 159px;
  background-image: url(${yeezy});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 1200px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${yeezy});
  }
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  margin-left: 4rem;
  color: white;
  

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    position: static;
    top: 0;
    height: 80vh;
    text-align: center;
  }
`

const H1 = styled.h1`
  font-size: 4rem;
`

const H2 = styled.h2`
  
  font-size: 2rem;
`

const P = styled.p`
  color: white;
  font-size: 1rem;
  width: 250px;
  margin-top: 3rem;

  @media (max-width: 1200px) {
    margin-top: 1rem;
  }
`

const Button = styled.button`
  background-color: white;
  color: black;
  margin-top: 1rem;
  width: 120px;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`

function HeroImage() {

  const navigate = useNavigate()
  return (
    <>
    <Main>
    <Content>
      <H1>YEEZY</H1>
      <H2>Brand new drop</H2>
      <P>Explore the iconic Yeezy sneakers, known for their quality and design.  Featuring unique designs like the Boost 350 and 700.</P>
      <Button onClick={() => navigate('/brand/Yeezy')}>SHOP NOW</Button>
    </Content>
    </Main>
    </>
  )
}

export default HeroImage