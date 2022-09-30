import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = () => {
  return (
    <div className="user-order mt-2">
      <Row>
        <div className="py-2 order-title">Request a number: #234556</div>
      </Row>
      <UserAllOrderCard />
      <UserAllOrderCard />
      <Row className="d-flex justify-content-between">
        <Col xs="6" className="">
          <div>
            <div className="d-inline">The Condition</div>
            <div className="d-inline mx-2 stat">Underway</div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="barnd-text">4000 EGY</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserAllOrderItem
