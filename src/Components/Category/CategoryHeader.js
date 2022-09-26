import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const CategoryHeader = () => {
  return (
    <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">All</div>
            <div className="cat-text-header">Mobile Phone</div>
            <div className="cat-text-header">Computer</div>
            <div className="cat-text-header"> TVs & Electronics</div>
            <div className="cat-text-header">Women's Fashion</div>
            <div className="cat-text-header">Video Games</div>
            <div className="cat-text-header">Books</div>
            <div className="cat-text-header">SuperMarket</div>
            <div className="cat-text-header">Healthy, Furniture & Tools</div>
            <div className="cat-text-header">See All</div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CategoryHeader
