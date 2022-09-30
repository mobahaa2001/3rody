import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminAddBrand from '../../Components/Admin/AdminAddBrand'
import AdminAddCategory from '../../Components/Admin/AdminAddCategory'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

const AdminAddCategoryPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
          <AdminAddCategory />
        </Col>
      </Row>
    </Container>
  )
}

export default AdminAddCategoryPage
