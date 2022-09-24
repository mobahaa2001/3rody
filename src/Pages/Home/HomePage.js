import React from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatured from '../../Components/Brand/BrandFeatured'

const HomePage = () => {
  return (
    <div className="font" style={{ minHieght: '670px' }}>
      <Slider />
      <HomeCategory />
      <CardProductContainer title="Best Sellers" btntitle="SHOP NOW" />
      <DiscountSection />
      <CardProductContainer title="Up to 70% Off" btntitle="SHOP NOW" />
      <BrandFeatured />
    </div>
  )
}
export default HomePage
