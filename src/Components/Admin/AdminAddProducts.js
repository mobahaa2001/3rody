import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown'
import avatar from '../../Data/avatar.png'
import add from '../../Data/add.png'
const AdminAddProduct = () => {
  const onSelect = () => {}
  const onRemove = () => {}

  const options = [
    { name: 'First Classification', id: 1 },
    { name: 'Second Classification', id: 2 },
  ]

  return (
    <div>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4"> Add A New Product</div>
        <Col sm="8">
          <div className="text-form pb-2">Product Pictures</div>
          <img src={avatar} alt="" height="100px" width="120px" />
          <input
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Name"
          />
          <textarea
            className="input-form-area p-2 mt-3"
            rows="4"
            cols="50"
            placeholder="Product Description"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Price before Discount"
          />
          <input
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="Product Price"
          />
          <select
            name="languages"
            id="lang"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">Main classification</option>
            <option value="val">First Classification</option>
            <option value="val2">Second Classification</option>
            <option value="val2">Third Classification</option>
            <option value="val2">Fourth Classification</option>
          </select>

          <Multiselect
            className="mt-2 text-end"
            placeholder="Subcategory"
            options={options}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue="name"
            style={{ color: 'red' }}
          />
          <select
            name="brand"
            id="brand"
            className="select input-form-area mt-3 px-2 "
          >
            <option value="val">Brand</option>
            <option value="val2">First Brand Classification</option>
            <option value="val2">Second Brand Classification</option>
            <option value="val2">Fourth Brand Classification</option>
          </select>
          <div className="text-form mt-3 ">
            Available colors for the product
          </div>
          <div className="mt-1 d-flex">
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: '#E52C2C' }}
            ></div>
            <div
              className="color ms-2 border mt-1 "
              style={{ backgroundColor: 'white' }}
            ></div>
            <div
              className="color ms-2 border  mt-1"
              style={{ backgroundColor: 'black' }}
            ></div>
            <img src={add} alt="" width="30px" height="35px" className="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button className="btn-save d-inline mt-2 ">Edit Save</button>
        </Col>
      </Row>
    </div>
  )
}

export default AdminAddProduct
