import React from 'react'
import { Link } from 'react-router-dom'

const UserSideBar = () => {
  return (
    <div className="sidebar">
      <div className="d-flex flex-column">
        <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
            Requisition Management{' '}
          </div>
        </Link>
        <Link to="/user/favoriteproduct" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Favorite Products{' '}
          </div>
        </Link>
        <Link to="/user/addresses" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            User Addresses{' '}
          </div>
        </Link>

        <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
          <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
            Profile{' '}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UserSideBar
