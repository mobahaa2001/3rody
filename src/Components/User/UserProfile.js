import React from 'react'
import { Row, Col } from 'react-bootstrap'
import deleteicon from '../../Data/delete.png'
const UserProfile = () => {
  return (
    <div>
      <div className="admin-content-text">Personal Page</div>
      <div className="user-address-card my-3 px-2">
        <Row className="d-flex justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">Name:</div>
            <div className="p-1 item-delete-edit">Mohame Bahaa El-Din</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div className="d-flex mx-2">
              <p className="item-delete-edit"> Edit</p>
              <img
                alt=""
                className="ms-1"
                src={deleteicon}
                height="17px"
                width="15px"
              />
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">Telephone Number:</div>
            <div className="p-1 item-delete-edit">01556121692</div>
          </Col>
        </Row>
        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">Email:</div>
            <div className="p-1 item-delete-edit">mobahaa2001@gmail.com</div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="" >
            <div className="admin-content-text mb-3">Change Password</div>
            <input
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="Enter the old password"
            />
            <input
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="Enter the new password"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-center mt-3">
            <button className="btn-save d-inline mt-2 ">Save Password</button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default UserProfile
