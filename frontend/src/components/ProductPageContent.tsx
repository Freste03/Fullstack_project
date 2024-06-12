import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Content = styled.div`
    
    margin-top: 180px;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 2rem;
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
margin-top: 0.5rem;
`

const H4 = styled.h4`
font-weight: normal;
margin-top: 0.5rem;
`

const Img = styled.img`
  width: 550px;
  height: 550px;
  border: 1px solid black;
`

const SizesContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.5rem;
`

const Size = styled.div`
    border: 1px solid black;
    padding: 0.5rem;
    cursor: pointer;
`

const Buttons = styled.div`
    margin-top: 0.5rem;
`

const Button = styled.button`
    width: 100%;
    background-color: black;
    color: white;
    border: 1px solid black;
    padding: 1rem 0;
    font-weight: bold;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: all 0.3s ease;
    &:hover {
        background-color: white;
        color: black;
    }
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
    const [selectedSize, setSelectedSize] = useState<number>(0)

    const selectSize = (size: number) => {
        setSelectedSize(size)
    }

      useEffect(() => {
        fetch(`http://localhost:3000/product/${id}/${name}`)
          .then(res => res.json())
          .then(data => setProduct(data))
          .catch(err => console.error("Error fetching products", err))
      }, [id, name])

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [id, name])

      const addToCart = () => {
        fetch('/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            product_id: product?.[0]?.product_id,
            size: selectedSize
          }),
        })
          .then(res => res.json())
          .then(data => console.log(data))
          .catch(err => console.error("Error fetching products", err)) 
      }

      return (
        <Content>
            <Img src={product?.[0]?.image_url}></Img>
            <InformationContainer>
            <H1>{product?.[0]?.name}</H1>
            <H2>{product?.[0]?.brand}</H2>
            <H4>{product?.[0]?.price} kr</H4>
            <H3>{product?.[0]?.description}</H3>
            <H4>Select Size</H4>
            <SizesContainer>
                <Size onClick={() => selectSize(40)} style={{backgroundColor: selectedSize === 40 ? 'lightblue' : 'white'}}>40</Size>
                <Size onClick={() => selectSize(41)} style={{backgroundColor: selectedSize === 41 ? 'lightblue' : 'white'}}>41</Size>
                <Size onClick={() => selectSize(42)} style={{backgroundColor: selectedSize === 42 ? 'lightblue' : 'white'}}>42</Size>
                <Size onClick={() => selectSize(43)} style={{backgroundColor: selectedSize === 43 ? 'lightblue' : 'white'}}>43</Size>
                <Size onClick={() => selectSize(44)} style={{backgroundColor: selectedSize === 44 ? 'lightblue' : 'white'}}>44</Size>
                <Size onClick={() => selectSize(45)} style={{backgroundColor: selectedSize === 45 ? 'lightblue' : 'white'}}>45</Size>
                <Size onClick={() => selectSize(46)} style={{backgroundColor: selectedSize === 46 ? 'lightblue' : 'white'}}>46</Size>
                <Size onClick={() => selectSize(47)} style={{backgroundColor: selectedSize === 47 ? 'lightblue' : 'white'}}>47</Size>
                <Size onClick={() => selectSize(48)} style={{backgroundColor: selectedSize === 48 ? 'lightblue' : 'white'}}>48</Size>
                <Size onClick={() => selectSize(49)} style={{backgroundColor: selectedSize === 49 ? 'lightblue' : 'white'}}>49</Size>
            </SizesContainer>
            <Buttons>
                <Button onClick={addToCart}>ADD TO BAG</Button>
            </Buttons>
            </InformationContainer>
        </Content>
      );
}

export default ProductPageContent