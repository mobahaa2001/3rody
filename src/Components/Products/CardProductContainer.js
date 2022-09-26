import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../UItily/SubTitle'
import ProductCard from './ProductCard'

const CardProductContainer = ({ title, btntitle, pathText }) => {
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  )
}
export default CardProductContainer
