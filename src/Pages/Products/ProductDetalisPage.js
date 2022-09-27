import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import ProductDetalis from '../../Components/Products/ProductDetails'
import RateContainer from '../../Components/Rate/RateContainer'

const ProductDetailsPage = () => {
  return (
    <div style={{ minHeight: '680px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetalis />
        <RateContainer />
      </Container>
    </div>
  )
}

export default ProductDetailsPage
