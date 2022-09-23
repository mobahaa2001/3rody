import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import facebook from '../../Data/facebook.png'
import instagram from '../../Data/instagram.png'
import twitter from '../../Data/twitter.png'
import phone from '../../Data/phone.png'
const Footer = () => {
  return (
    <div
      className="footer-background footer mt-3 pt-2"
      style={{ maxHeight: '50px' }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className="footer-shroot ">Privacy Policy</div>
            <div className="footer-shroot mx-2">About Us</div>
            <div className="footer-shroot mx-2">Contact Us</div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center "
          >
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="" />
              <p className="footer-phone">01556121692</p>
            </div>
            <div style={{ cursor: 'pointer' }}>
              <a href="https://www.facebook.com/profile.php?id=100068249082407">
                <img width="20px" height="20px" src={facebook} alt="" />
              </a>
            </div>
            <div style={{ cursor: 'pointer' }} className="">
              <a href="https://www.instagram.com/mobahaacode/">
                <img width="20px" height="20px" src={instagram} alt="" />
              </a>
            </div>
            <div style={{ cursor: 'pointer' }} className="">
              <a href="https://twitter.com/MoBahaaDev2001">
                <img width="20px" height="20px" src={twitter} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
