import HomePage from './Pages/Home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLogin from './Components/UItily/NavBarLogin'
import Footer from './Components/UItily/Footer'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'
import AllCategoryPage from './Pages/Category/AllCategoryPage'
import AllBrandPage from './Pages/Brand/AllBrandPage'
import ShopProductPage from './Pages/Products/ShopProductPage'
import ProductDetailsPage from './Pages/Products/ProductDetailsPage'
import CartPage from './Pages/Cart/CartPage'
import PayMethodPage from './Pages/Checkout/PayMethodPage'
import AdminAllProductPage from './Pages/Admin/AdminAllProductPage'
import AdminAllOrderspage from './Pages/Admin/AdminAllOrderspage'
import AdminOrdersDetailspage from './Pages/Admin/AdminOrdersDetailspage'
import AdminAddBrandpage from './Pages/Admin/AdminAddBrandpage'
import AdminAddCategoryPage from './Pages/Admin/AdminAddCategoryPage'
import AdminSubCategoryPage from './Pages/Admin/AdminSubCategoryPage'

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
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<PayMethodPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrderspage />} />
          <Route
            path="/admin/orders/:id"
            element={<AdminOrdersDetailspage />}
          />
          <Route path="/admin/addbrand" element={<AdminAddBrandpage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminSubCategoryPage />} />

          
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
