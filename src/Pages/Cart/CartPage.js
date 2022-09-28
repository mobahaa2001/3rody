import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartCheckout from '../../Components/Cart/CartCheckout'
import CartItem from '../../Components/Cart/CartItem'

const CartPage = () => {
  return (
    <Container style={{ minHeight: '680px' }}>
      <Row>
        <div className="cart-title mt-4">Shopping Cart</div>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="12" md="9">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Col>
              <Col xs="6" md="3">
                  <CartCheckout/>
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage
