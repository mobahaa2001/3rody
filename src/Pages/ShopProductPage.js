import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/UItily/SearchCountResult'

const ShopProductPage = () => {
  return (
    <div style={{ minHeight: '680px' }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="152 Results" />
      </Container>
    </div>
  )
}
export default ShopProductPage
