import React from 'react'
import NavBarLogin from '../../Components/UItily/NavBarLogin'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductContainer from '../../Components/Products/CardProductContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatured from '../../Components/Brand/BrandFeatured'
import Footer from '../../Components/UItily/Footer'

const HomePage = () => {
  return (
    <div className="font" style={{ minHieght: '670px' }}>
      <NavBarLogin />
      <Slider />
      <HomeCategory />
      <CardProductContainer title="Best Sellers" btntitle="SHOP NOW" />
      <DiscountSection />
      <CardProductContainer title="Up to 70% Off" btntitle="SHOP NOW" />
      <BrandFeatured />
      <Footer />
    </div>
  )
}
export default HomePage
