import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, Outlet} from 'react-router-dom'

const Content = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;
`

const H1 = styled.h1`
  font-size: 2rem;
  color: black;
`

const H2 = styled.h2`
  font-size: 1.2rem;
  color: black;
  margin-top: 0.5rem;
`

const H3 = styled.h3`
  font-size: 1rem;
  font-weight: normal;
`

const H4 = styled.h4`
  font-weight: normal;
  margin-top: 0.5rem;
`

const Shoes = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`

const Img = styled.img`
  width: 450px;
  height: 450px;
  border: 1px solid black;
`

const ShoeItem = styled.div`
  display: flex;
  flex-direction: column;
`

function NewShoes() {

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

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/sortbydateproducts')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
    <Content>
      <H1>NEW ARRIVALS</H1>
      <Shoes>{products.slice(0, 6).map((product) => 
      <ShoeItem key={product.product_id}>
      <Link to={`/product/${product.product_id}/${product.name}`}>
      <Img src={product.image_url}></Img>
      </Link>
      <H2>{product.brand}</H2>
      <H3>{product.name}</H3>
      <H4>{product.price} kr</H4>
      </ShoeItem>
      )}</Shoes>
    </Content>
    <Outlet />
    </>
  )
}

export default NewShoes