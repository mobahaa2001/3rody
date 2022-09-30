import React from 'react'
import { Row, Col } from 'react-bootstrap'
import mobile from '../../Data/mobile.png'
const UserAllOrderCard = () => {
  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs="3" md="2" className="d-flex justify-content-start">
          <img width="93px" height="120px" src={mobile} alt="" />
        </Col>
        <Col xs="8" md="6">
          <div className="d-inline pt-2 cat-title">
            Apple Iphone XS With Facetime - 64 GB, 4G LTE, Silver, 4 GB Ram,
            Single Sim & E-Sim.
          </div>
          <div className="d-inline p-3 pt-2 cat-rate me-2">4.5</div>
          <div className="rate-count d-inline p-1 pt-2">(Rate : 600)</div>
          <div className="mt-3">
            <div className="cat-text  d-inline">Qty</div>
            <input
              className="mx-2 "
              type="number"
              style={{ width: '40px', height: '25px' }}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default UserAllOrderCard
