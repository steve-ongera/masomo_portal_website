import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar, Footer, SignupModal } from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <SignupModal />
    </>
  )
}