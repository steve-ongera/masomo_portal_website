import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Navbar, Footer, SignupModal, Loader, FloatingWhatsApp } from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pricing from './pages/Pricing.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Show the loader on first visit only: wait for the page to finish loading, then hide it
  useEffect(() => {
    let timer
    const finish = () => {
      timer = setTimeout(() => setLoading(false), 600)
    }
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', finish)
    }
  }, [])

  return (
    <>
      {loading && <Loader />}
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
      <FloatingWhatsApp />
    </>
  )
}