import HomePage from './Pages/Home/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLogin from './Components/UItily/NavBarLogin'
import Footer from './Components/UItily/Footer'
import LoginPage from './Pages/Auth/LoginPage'

function App() {
  return (
    <div className="font">
      <NavBarLogin />

      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
