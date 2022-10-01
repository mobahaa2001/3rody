import React from 'react'
import { Row } from 'react-bootstrap';
import Pagination from '../UItily/Pagination';
import ProductCard from './../Products/ProductCard';
const UserFavoriteProduct = () => {
    return (
        <div>
            <div className="admin-content-text pb-4">Favorite Products</div>
            <Row className='justify-content-start'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
            <Pagination />
        </div>
    )
}

export default UserFavoriteProduct