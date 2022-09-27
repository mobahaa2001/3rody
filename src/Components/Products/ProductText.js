import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ProductText = () => {
  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">Electronics :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            Apple Iphone XS With Facetime - 64 GB, 4G LTE, Silver, 4 GB Ram,
            Single Sim & E-Sim
            <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">Brand: </div>
          <div className="barnd-text d-inline mx-1">Apple</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: '#E52C2C' }}
          ></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: 'white' }}
          ></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: 'black' }}
          ></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">About this item :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            A12 Bionic chip(Hexa-core)4GB RAM64GBFace ID4G LTEDual 12MP
            wide-angle and telephoto camerasTrueDepth Camera 7MP cameraSplash,
            Water, and Dust Resistant Rated IP68 (maximum depth of 2 meters up
            to 30 minutes)5.8â€‘inch (diagonal) allâ€‘screen OLED177 grams
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">
            29,647.19 EGP
          </div>
          <div className="product-cart-add px-3 py-3 d-inline mx-3">
            Add to Cart{' '}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductText
