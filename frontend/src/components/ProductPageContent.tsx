import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Content = styled.div`
    min-height: 80vh;
    margin-top: 223px;
    margin-left: 4rem;
    margin-right: 4rem;
    display: flex;
    width: 100%;
`

const InformationContainer = styled.div`
    width: 450px;
`

const H1 = styled.h1`
font-size: 1.5rem;
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

const Img = styled.img`
  width: 450px;
  height: 450px;
  border: 1px solid black;
`

function ProductPageContent() {

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

    const [product, setProduct] = useState<Product[]>([])
    const { id, name } = useParams<{ id: string, name: string}>()

      useEffect(() => {
        fetch(`http://localhost:3000/product/${id}/${name}`)
          .then(res => res.json())
          .then(data => setProduct(data))
          .catch(err => console.error("Error fetching products", err))
      }, [id, name])

      return (
        <Content>
            <Img src={product?.[0]?.image_url}></Img>
            <InformationContainer>
            <H1>{product?.[0]?.name}</H1>
            <H2>{product?.[0]?.brand}</H2>
            <H3>{product?.[0]?.description}</H3>
            <H4>{product?.[0]?.price} kr</H4>
            </InformationContainer>
        </Content>
      );
}

export default ProductPageContent