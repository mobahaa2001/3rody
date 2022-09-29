import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CartItem from '../Cart/CartItem'

const AdminOrderDetails = () => {
  return (
    <div>
      <div className="admin-content-text">Order Details Number: #56</div>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
          <div className="admin-content-text py-2">Customer Details:</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
          >
            الاسم:
          </div>

          <div
            style={{
              color: '#979797',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
            className="mx-2"
          >
            AbdelReahman Mohamed Ahmed
          </div>
        </Col>

        <Col xs="12" className="d-flex">
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
          >
            Telephone Number:
          </div>

          <div
            style={{
              color: '#979797',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
            className="mx-2"
          >
            0021313432423
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: '#555550',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
          >
            Email:
          </div>

          <div
            style={{
              color: '#979797',
              fontFamily: 'Almarai',
              fontSize: '16px',
            }}
            className="mx-2"
          >
            abdosakr203@gmail.com
          </div>
        </Col>
        <div className=" d-inline px-4 border text-center pt-2">
          The Toltal: 4000EGY{' '}
        </div>
        <div className="d-flex mt-2 justify-content-center">
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-1  text-center px-3 w-50"
          >
            <option value="val" className="mt-3">
              Order Status
            </option>
            <option value="val2" className="mt-3">
              Underway
            </option>
            <option value="val2" className="mt-3">
              Been completed
            </option>
            <option value="val2" className=" mt-3">
              Cancellation
            </option>
          </select>
          <button className="btn-a px-3 d-inline mx-2 ">Save </button>
        </div>
      </Row>
    </div>
  )
}

export default AdminOrderDetails
