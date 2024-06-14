import styled from 'styled-components'
import airforce1 from '../assets/airforce1.jpg'
import airforce12 from '../assets/airforce12.jpg'
import airforce13 from '../assets/airforce13.jpg'
import { useNavigate } from 'react-router-dom'


const Content = styled.div`
    margin-top: 4rem;
    margin-left: 4rem;
    margin-right: 4rem;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 650px) {
        margin-left: 0;
        margin-right: 0;
    }
`

const IMG = styled.img`
    border: 1px solid black;
    width: 50%;

    @media (max-width: 650px) {
        width: 50%;
    }
`

const Text = styled.div`
    width: 50%;
    border: 1px solid black;
    background-color: lightblue;
    text-align: center;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 650px) {
        width: 50%;
    }
`

const H1 = styled.h1`

   @media (max-width: 650px) {
    font-size: 1rem;
   }
`

const H2 = styled.h2`
   margin-top: 0.5rem;
   font-size: 1.2rem;

   @media (max-width: 650px) {
    font-size: 0.8rem;
   }
`

const Button = styled.button`
background-color: black;
color: white;
margin-top: 1rem;
width: 120px;
padding: 10px;
font-size: 1rem;
font-weight: bold;
cursor: pointer;
transition: all 0.3s ease;

&:hover {
  background-color: white;
  color: black;
}

@media (max-width: 650px) {
  font-size: 0.7rem;
  width: 80px;
  padding: 3px;
  margin-top: 0.5rem;
}
`

function SportShoes() {

  const navigate = useNavigate()
  return (
    <Content>
      <IMG src={airforce1}></IMG>
      <IMG src={airforce12}></IMG>
      <Text>
        <H1>Nike Air Force 1</H1>
        <H2>The perfect sneakers for the summer</H2>
        <Button onClick={() => navigate("/product/3/Nike Air Force 1 '07")}>SHOP NOW</Button>
      </Text>
      <IMG src={airforce13}></IMG>
    </Content>
  )
}

export default SportShoes