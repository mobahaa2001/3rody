import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartCheckout = () => {
  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex  flex-column  ">
        <div className="d-flex  ">
          <input
            className="copon-input d-inline text-center "
            placeholder="Enter Coupon"
          />
          <button className="copon-btn d-inline ">Apply</button>
        </div>
        <div className="product-price d-inline w-100 my-3  border">
          EGP 30,770.00
        </div>
        <Link
          to="/order/paymethoud"
          style={{ textDecoration: 'none' }}
          className="product-cart-add  d-inline "
        >
          <button className="product-cart-add w-100 px-2">Checkout</button>
        </Link>
      </Col>
    </Row>
  )
}

export default CartCheckout
