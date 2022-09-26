import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import Pagination from '../../Components/UItily/Pagination'
import SearchCountResult from '../../Components/UItily/SearchCountResult'
import SideFilter from '../../Components/UItily/SideFilter'

const ShopProductPage = () => {
  return (
    <div style={{ minHeight: '680px' }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="152 Results" />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
            <CardProductContainer title="" btntitle="" />
          </Col>
        </Row>
        <Pagination />
      </Container>
    </div>
  )
}
export default ShopProductPage
