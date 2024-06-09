import styled from  'styled-components'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Content = styled.div`
  min-height: 80vh;
  margin-top: 223px;
  margin-left: 4rem;
  margin-right: 4rem;
`

const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  justify-content: flex-start;
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

function BrandProducts() {
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

  const { brand } = useParams<{brand: string}>();
  const upperBrand = brand ? brand[0].toUpperCase() + brand.slice(1) : '';

  useEffect(() => {
    fetch(`/brand/${upperBrand}`)
    .then(res => res.json())
    .then(data => {
        setProducts(data)
        console.log(data)})
  }, [ brand ])

  return (
    <>
    <Content>
      <TopContent>
        <h1>{brand?.toLocaleUpperCase()} PRODUCTS</h1>
      </TopContent>
      <Shoes>{products.map((product) => 
      <ShoeItem key={product.product_id}>
      <Link to={`/product/${product.product_id}/${product.name}`}><Img src={product?.image_url}></Img></Link>
      <H2>{product.brand}</H2>
      <H3>{product.name}</H3>
      <H4>{product.price} kr</H4>
      </ShoeItem>
      )}</Shoes>
    </Content>
    <Outlet></Outlet>
    </>
  )
}

export default BrandProducts