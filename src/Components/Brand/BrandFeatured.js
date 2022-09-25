import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../UItily/SubTitle'
import BrandCard from './BrandCard'
import brand1 from '../../Data/brand1.png'
import brand2 from '../../Data/brand2.png'
import brand3 from '../../Data/brand3.png'

const BrandFeatured = ({ title, btntitle }) => {
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand2} />
        <BrandCard img={brand1} />
        <BrandCard img={brand3} />
      </Row>
    </Container>
  )
}

export default BrandFeatured
