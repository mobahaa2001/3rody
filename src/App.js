import HomePage from './Pages/Home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLogin from './Components/UItily/NavBarLogin'
import Footer from './Components/UItily/Footer'
import LoginPage from './Pages/Auth/LoginPage'
import RegisterPage from './Pages/Auth/RegisterPage'

function App() {
  return (
    <div className="font">
      <NavBarLogin />

      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
