import React from 'react'
import { Container } from 'react-bootstrap'
import ChoosePayMethoud from '../../Components/Checkout/ChoosePayMethoud'
const PayMethodPage = () => {
  return (
    <Container style={{ minHeight: '680px' }}>
      <ChoosePayMethoud />
    </Container>
  )
}

export default PayMethodPage
