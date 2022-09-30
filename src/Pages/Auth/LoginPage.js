import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <Container style={{ minHeight: '680px' }}>
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <p className="mx-auto">Welcome back!</p>
          <label className="mx-auto title-login">Sign in to your account</label>
          <input
            placeholder="Email"
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            placeholder="Password"
            type="password"
            className="user-input text-center mx-auto"
          />
          <button className="btn-login mx-auto mt-4">SIGN IN</button>
          <label className="mx-auto my-4">
            Don't have an account?{' '}
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <span style={{ cursor: 'pointer' }} className="text-danger">
                Sign Up
              </span>
            </Link>
          </label>
        </Col>

        <label className="mx-auto my-4">
          <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
            <span style={{ cursor: 'pointer' }} className="text-danger">
              Login In Admin
            </span>
          </Link>

          <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
            <span style={{ cursor: 'pointer' }} className="text-danger mx-3">
              Login In User
            </span>
          </Link>
        </label>
      </Row>
    </Container>
  )
}
export default LoginPage
