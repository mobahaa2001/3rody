import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import clothe from '../../Data/clothe.png'
import cat2 from '../../Data/cat2.png'
import labtop from '../../Data/labtop.png'
import sale from '../../Data/sale.png'
import pic from '../../Data/pic.png'
const CategoryContainer = () => {
  return (
    <Container>
      <div className="admin-content-text mt-3">All Category</div>
      <Row className="my-2 d-flex justify-content-between">
        <CategoryCard title="MONITORS" img={clothe} background="#ff6b6b" />
        <CategoryCard title="ACCESSORIES" img={cat2} background="#94d82d" />
        <CategoryCard title="BUNDLES" img={labtop} background="#ff922b" />
        <CategoryCard title="STORAGE" img={sale} background="#845ef7" />
        <CategoryCard title="NOTEBOOK" img={clothe} background="#5c7cfa" />
        <CategoryCard title="SPECIAL OFFER" img={pic} background="#20c997" />
        <CategoryCard title="MONITORS" img={clothe} background="#ff6b6b" />
        <CategoryCard title="ACCESSORIES" img={cat2} background="#94d82d" />
        <CategoryCard title="BUNDLES" img={labtop} background="#ff922b" />
        <CategoryCard title="STORAGE" img={sale} background="#845ef7" />
        <CategoryCard title="NOTEBOOK" img={clothe} background="#5c7cfa" />
        <CategoryCard title="SPECIAL OFFER" img={pic} background="#20c997" />
        <CategoryCard title="MONITORS" img={clothe} background="#ff6b6b" />
        <CategoryCard title="ACCESSORIES" img={cat2} background="#94d82d" />
        <CategoryCard title="BUNDLES" img={labtop} background="#ff922b" />
        <CategoryCard title="STORAGE" img={sale} background="#845ef7" />
        <CategoryCard title="NOTEBOOK" img={clothe} background="#5c7cfa" />
        <CategoryCard title="SPECIAL OFFER" img={pic} background="#20c997" />
      </Row>
    </Container>
  )
}
export default CategoryContainer
