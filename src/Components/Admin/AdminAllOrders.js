import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrderItem'

const AdminAllOrders = () => {
  return (
    <div>
      <div className="admin-content-text">Manage All Orders</div>
      <Row className="justify-content-starts">
        <AdminAllOrdersItem />
        <AdminAllOrdersItem />
      </Row>
    </div>
  )
}

export default AdminAllOrders
