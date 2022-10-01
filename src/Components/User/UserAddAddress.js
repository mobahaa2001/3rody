import React from 'react'
import { Row, Col } from 'react-bootstrap'

const UserAddAddress = () => {
  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">Add a new title</div>
        <Col sm="8">
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Label the address (for example, home - work)"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Detailed Address"
          />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Telephone number"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-center mt-3">
          <button className="btn-save d-inline">Add a title</button>
        </Col>
      </Row>
    </div>
  )
}

export default UserAddAddress
