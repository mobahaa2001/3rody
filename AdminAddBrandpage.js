import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAddBrand from '../../Components/Admin/AdminAddBrand'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

const AdminAddBrandpage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAddBrand />
        </Col>
      </Row>
    </Container>
  )
}

export default AdminAddBrandpage
