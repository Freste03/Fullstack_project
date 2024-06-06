import styled from 'styled-components'
import yeezy from '../assets/yeezy.jpg'

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  margin-top: 159px;
  background-image: url(${yeezy});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  margin-left: 4rem;
  color: white;
  
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
  return (
    <>
    <Main>
    <Content>
      <H1>YEEZY</H1>
      <H2>Brand new drop</H2>
      <P>Explore the iconic Yeezy sneakers, known for their quality and design.  Featuring unique designs like the Boost 350 and 700.</P>
      <Button>SHOP NOW</Button>
    </Content>
    </Main>
    </>
  )
}

export default HeroImage