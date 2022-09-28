import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ChoosePayMethoud = () => {
  return (
    <div>
      <div className="admin-content-text pt-5">Payment Method</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-4">
            <input
              name="group"
              id="group1"
              type="radio"
              value="Credit/Debit Card"
              className="mt-2"
            />
            <label className="mx-2" for="group1">
              Credit/Debit Card
            </label>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs="12" className="d-flex">
            <input
              name="group"
              id="group1"
              type="radio"
              value="Buy Now, Pay Later"
              className="mt-2"
            />
            <label className="mx-2" for="group1">
              Buy Now, Pay Later
            </label>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div className="product-price d-inline   border">EGY 4,799.97</div>
          <div className="product-cart-add px-3 pt-3 d-inline me-2">
            {' '}
            Complete Checkout
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ChoosePayMethoud
