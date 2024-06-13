import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Content = styled.div`
    margin-top: 200px;
    margin-left: 4rem;
    margin-right: 4rem;
    min-height: 80vh;
    display: flex;
`

const Items = styled.div`
    height: 650px;
    overflow-y: scroll;
    width: 230px;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    width: 210px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
`

const Price = styled.div`
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
`

const Shipping = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
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
    transition: 0.3s all ease;
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

const Size = styled.p`
    font-size: 1rem;
`

const Svg = styled.svg`
    color: black;
    cursor: pointer;
    transistion: 0.3s;
    &:hover {
        color: #FF4545;
    }
`

function CartContent() {

    type Product = {
        orderItemId: number;
        name: string;
        brand: string;
        description: string;
        price: number;
        stock: number;
        image_url: string;
        size: string;
      };

    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
        fetch('/cart')
            .then(res => res.json())
            .then(data => setCartItems(data))
            .catch(err => console.error("Error fetching products", err))
    }, [])
       
    const removeFromCart = async (id: number) => {
        try {
            await fetch(`/cart/${id}`, {
                method: 'DELETE',
            })
            setCartItems(cartItems.filter(item => item.orderItemId !== id))
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <Content>
        {cartItems.length > 0 ? (
            <>
            <Items>
            {Array.isArray(cartItems) && cartItems.map((product) => 
             <div key={product.orderItemId}>
                 <Item>
                     <Img src={product.image_url}></Img>
                     <Name>{product.name}</Name>
                     <Brand>{product.brand}
                     <Size> Size {product.size}</Size>
                     </Brand>
                     <Price>{product.price} kr
                     <Svg onClick={() => removeFromCart(product.orderItemId)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                     </Svg>
                     </Price>
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
             <H1>Total {cartItems.reduce((acc, item) => acc + item.price, 0)}</H1>
             <Button>Checkout</Button>
         </Shipping>
         </>
        ) : (
            <H1>Your cart is empty</H1>
        )}
        
    </Content>
  )
}

export default CartContent