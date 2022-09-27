import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import rate from '../../Data/rate.png'
import Pagination from '../UItily/Pagination'
import RateItem from './RateItem'
import RatePost from './RatePost'

const RateContainer = () => {
  return (
    <Container className="rate-container">
      <Row>
        <Col className="d-flex">
          <div className="sub-tile d-inline p-1 ">
            Customer questions & answers
          </div>
          <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
          <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
          <div className="rate-count d-inline p-1 pt-2">(160 rate)</div>
        </Col>
      </Row>
      <RatePost />
      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />

      <Pagination />
    </Container>
  )
}

export default RateContainer
