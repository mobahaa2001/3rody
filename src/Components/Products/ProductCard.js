import React from 'react'
import { Card, Col } from 'react-bootstrap'
import favoff from '../../Data/fav-off.png'
import rate from '../../Data/rate.png'
import prod1 from '../../Data/prod1.png'

const ProductCard = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: '100%',
          height: '345px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 2px 0 rgba(151,151,151,0.5)',
        }}
      >
        <Card.Img style={{ height: '228px', width: '100%' }} src={prod1} />
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favoff}
            alt=""
            className="text-center"
            style={{
              height: '24px',
              width: '26px',
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">
              Laptop With 15.6-inch Display Intel Core i5-10300H Processor 8GB Ram{' '}
            </div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">4.5</div>
              </div>
              <div className="d-flex">
                <div className="card-price">880</div>
                <div className="card-currency mx-1">$</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard
