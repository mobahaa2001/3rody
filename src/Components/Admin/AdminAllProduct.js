import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductCard from './AdminAllProductCard'

const AdminAllProduct = () => {
  return (
    <div>
      <div className="admin-content-text">Manage All Products</div>
      <Row className="justify-content-start">
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
      </Row>
    </div>
  )
}

export default AdminAllProduct
