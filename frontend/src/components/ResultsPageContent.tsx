import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
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

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function ResultsPageContent() {

  const query = useQuery()
  const search = query.get('search')
  const [products, setProducts] = useState<Product[]>([])
  const [sortOrder,  setSortOrder] = useState<'asc' | 'desc'>('asc')

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

  useEffect(() => {
    if (search) {
      fetch(`http://localhost:3000/search?search=${search}`)
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error("Error fetching products", err))
    }
  }, [search])

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })
    setProducts(sortedProducts)
  }

  const handleSort = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'))
    sortProducts()
  }

  useEffect(() => {
    if (products.length > 0) {
      sortProducts()
    }
  }, [sortOrder])

  return (
    <Content>
      <TopContent>
        <H1>{products?.length > 0 && search !== ""? `SHOWING RESULTS FOR "${search?.toLocaleUpperCase()}" (${products?.length})` : `NO RESULTS FOUND FOR "${search?.toLocaleUpperCase()}"`}</H1>
        {products?.length > 0 && search !== "" &&
        <Button onClick={handleSort}>Sort By {sortOrder === 'asc' ? 'Highest Price △' : 'Lowest Price ▽'}
        </Button>
        }
      </TopContent>
      <Shoes>{products.map((product) => 
      <ShoeItem key={product.product_id}>
      <Img src={product.image_url}></Img>
      <H2>{product.brand}</H2>
      <H3>{product.name}</H3>
      <H4>{product.price} kr</H4>
      </ShoeItem>
      )}</Shoes>
    </Content>
  )
}

export default ResultsPageContent