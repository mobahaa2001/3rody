import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import ProductDetalis from '../../Components/Products/ProductDetails'
import RateContainer from '../../Components/Rate/RateContainer'

const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: '680px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetalis />
        <RateContainer />
        <CardProductContainer title="Customers who viewed items in your browsing history also viewed" />
      </Container>
    </div>
  )
}

export default ProductDetailsPage
