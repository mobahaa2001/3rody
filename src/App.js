import HomePage from './Pages/Home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLogin from './Components/UItily/NavBarLogin'
import Footer from './Components/UItily/Footer'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import AllCategoryPage from './Pages/Category/AllCategoryPage'
import AllBrandPage from './Pages/Brand/AllBrandPage'
import ShopProductPage from './Pages/Products/ShopProductPage'

function App() {
  return (
    <div className="font">
      <NavBarLogin />

      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
