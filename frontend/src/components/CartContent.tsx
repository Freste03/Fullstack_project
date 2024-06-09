import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Content = styled.div`
    margin-top: 223px;
    margin-left: 4rem;
    margin-right: 4rem;
    min-height: 80vh;
    display: flex;
`

const Items = styled.div`
    
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 0.5rem;
    padding: 0.5rem;
`

const Img = styled.img`
    width: 200px;
    height: 200px;
    border: 1px solid black;
`

const Name = styled.div`
    font-size: 1.2rem;
`

const Brand = styled.div`
    font-size: 1.2rem;
`

const Price = styled.div`
    font-size: 1rem;
`

const Shipping = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
`

const Input = styled.input`
    padding: 0.5rem;
    margin-bottom: 0.5rem;
`

const Button = styled.button`
    padding: 0.5rem;
    background-color: black;
    color: white;
    cursor: pointer;
    font-size: 1.3rem;
    &:hover {
        background-color: white;
        color: black;
    }
`

const PersonalInformation = styled.div`
    
`

const H1 = styled.h1`
    font-size: 1.5rem;
`

const H2 = styled.h2`
    font-size: 1.2rem;
`

function CartContent() {

    type Product = {
        category_id: number,
        created: Date,
        description: string,
        image_url: string,
        name: string,
        brand: string,
        price: number,
        product_id: number,
        stock: number
      }

    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
        fetch('/cart')
            .then(res => res.json())
            .then(data => setCartItems(data))
            .catch(err => console.error("Error fetching products", err))
    }, [])
       

  return (
    <Content>
        <Items>
           {cartItems.map((product) => 
            <div key={product.product_id}>
                <Item>
                    <Img src={product.image_url}></Img>
                    <Name>{product.name}</Name>
                    <Brand>{product.brand}</Brand>
                    <Price>{product.price} kr</Price>
                </Item>
            </div>
            )}
        </Items>
        <Shipping>
            <H1>Shipping</H1>
            <H2>Country</H2>
            <Input type="text" placeholder="Country"></Input>
            <H2>Shipping address</H2>
            <Input type="text" placeholder="Shipping address"></Input>
            <H2>Zip code</H2>
            <Input type="text" placeholder="Zip code"></Input>
            <PersonalInformation>
                <Input type="text" placeholder="First name"></Input>
                <Input type="text" placeholder="Last name"></Input>
                <Input type="text" placeholder="Email"></Input>
                <Input type="text" placeholder="Phone number"></Input>
            </PersonalInformation>
            <Button>Checkout</Button>
        </Shipping>
    </Content>
  )
}

export default CartContent