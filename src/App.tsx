import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from '../src/pages/Landing/Landing'
import About from '../src/pages/about/about'
import UserAgreement from "../src/pages/UserAgreement/UserAgreement";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/user-agreement" element={<UserAgreement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter