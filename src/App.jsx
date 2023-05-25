import './App.css'
import ContactUs from './Pages/ContactUs'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="contactus/" element={<ContactUs />} />
      <Route path="login/" element={<LoginPage />} />
    </Routes>
  )
}

export default App
