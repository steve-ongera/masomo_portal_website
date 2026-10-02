import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/masomo_portal_navbar.png'

const WHATSAPP_URL = 'https://wa.me/254112284093?text=Hello%20MasomoPortal%2C%20I%27d%20like%20to%20get%20started'

export function Seo({ title, description }) {
  useEffect(() => {
    document.title = title
    let m = document.querySelector('meta[name="description"]')
    if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
    m.content = description
  }, [title, description])
  return null
}

const Logo = ({ nav }) => (
  <Link className={`${nav ? 'navbar-brand ' : ''}d-inline-flex gap-2 align-items-center lh-1`} to="/">
    <img src={logo} alt="Masomo Portal" height="40" style={{ height: 40, width: 'auto' }} />
  </Link>
)
const links = [['/', 'Home'], ['/about', 'About'], ['/pricing', 'Pricing'], ['/testimonials', 'Testimonials'], ['/contact', 'Contact Us']]

const socials = [
  ['bi-facebook', 'Facebook', 'https://www.facebook.com/'],
  ['bi-twitter-x', 'Twitter', 'https://twitter.com/'],
  ['bi-instagram', 'Instagram', 'https://www.instagram.com/'],
  ['bi-linkedin', 'LinkedIn', 'https://www.linkedin.com/'],
]

function TopBar() {
  return (
    <div className="bg-dark text-white small d-none d-lg-block">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <div className="d-flex align-items-center gap-4">
          <span><i className="bi bi-geo-alt me-2"></i>Nairobi, Kenya</span>
          <a href="mailto:steveongera001@gmail.com" className="text-white text-decoration-none"><i className="bi bi-envelope me-2"></i>steveongera001@gmail.com</a>
          <a href="tel:+254112284093" className="text-white text-decoration-none"><i className="bi bi-telephone me-2"></i>+254 112 284 093</a>
        </div>
        <div className="d-flex align-items-center justify-content-end gap-3 ms-auto">
          {socials.map(([icon, name, url]) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} className="text-white lh-1"><i className={`bi ${icon}`}></i></a>
          ))}
        </div>
      </div>
    </div>
  )
}

const drawerCss = `
@media (max-width: 991.98px) {
  #navbarOffcanvas { width: min(85vw, 320px); }
  #navbarOffcanvas .offcanvas-header { padding: 1rem 1.25rem; border-bottom: 1px solid #eef0f2; }
  #navbarOffcanvas .btn-close { font-size: 1.5rem; opacity: .7; }
  #navbarOffcanvas .offcanvas-body { padding: 1.25rem; }
  #navbarOffcanvas .navbar-nav { width: 100%; gap: 0; margin: 0 0 1.25rem !important; }
  #navbarOffcanvas .nav-item:not(:last-child) { border-bottom: 1px solid #e3e6ea; }
  #navbarOffcanvas .nav-link { padding: 1rem 0; text-align: center; font-weight: 500; color: #343a40; }
  #navbarOffcanvas .nav-link.active { color: var(--bs-primary); }
  #navbarOffcanvas .offcanvas-body > div { width: 100%; }
  #navbarOffcanvas .offcanvas-body .btn { width: 100%; justify-content: center; padding: .875rem 1rem; white-space: nowrap; }
}
`

// Close the mobile drawer (no-op on large screens where the menu is inline)
const closeMenu = () => {
  if (window.innerWidth < 992) document.querySelector('#navbarOffcanvas .btn-close')?.click()
}

export function Navbar() {
  return (
    <>
    <style>{drawerCss}</style>
    <TopBar />
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <Logo nav />
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas"
          aria-controls="navbarOffcanvas" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvas" aria-labelledby="navbarOffcanvasLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="navbarOffcanvasLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body align-items-lg-center">
            <ul className="navbar-nav mx-auto mb-3 mb-lg-0">
              {links.map(([to, l]) => (
                <li className="nav-item" key={to}><NavLink end to={to} className="nav-link" onClick={closeMenu}>{l}</NavLink></li>
              ))}
            </ul>
            <div className="d-flex gap-3 align-items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="btn btn-primary d-inline-flex align-items-center gap-2"
                style={{ backgroundColor: '#25D366', borderColor: '#25D366' }}
                onClick={closeMenu}
              >
                <i className="bi bi-whatsapp"></i>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

const cols = [
  ['Product', [['Solutions', '/'], ['Pricing', '/pricing'], ['Testimonials', '/testimonials'], ['Contact', '/contact']]],
  ['Company', [['About Us', '/about'], ['Careers', '/about'], ['Blog', '/'], ['Press', '/']]],
  ['Services', [['School Systems', '/'], ['Landing Pages', '/'], ['Student Portals', '/'], ['Fees & Results', '/']]],
]
const contacts = [
  ['bi-envelope', 'steveongera25@gmail.com', 'mailto:steveongera25@gmail.com'],
  ['bi-telephone', '+254 112 284 093', 'tel:+254112284093'],
  ['bi-telephone', '+254 757 790 687', 'tel:+254757790687'],
  ['bi-geo-alt', 'Nairobi, Kenya', null],
]
export function Footer() {
  return (
    <footer className="pt-lg-13 bg-light py-8">
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-4">
            <Logo />
            <p className="mt-4 mb-0">Empowering schools, colleges and universities across Kenya with custom systems, websites and automation built by expert engineers.</p>
          </div>
          <div className="col-md-8"><div className="row gx-3 gy-4">
            {cols.map(([h, ls]) => (
              <div className="col-6 col-lg-3" key={h}>
                <h4 className="fs-5 mb-3">{h}</h4>
                <ul className="list-unstyled lh-lg small">{ls.map(([l, to]) => <li key={l}><Link to={to}>{l}</Link></li>)}</ul>
              </div>
            ))}
            <div className="col-6 col-lg-3">
              <h4 className="fs-5 mb-3">Contact</h4>
              <ul className="list-unstyled lh-lg small mb-0">{contacts.map(([icon, text, href]) => (
                <li key={text} className="d-flex align-items-start gap-2">
                  <i className={`bi ${icon} text-primary`}></i>
                  {href ? <a href={href} className="text-break">{text}</a> : <span>{text}</span>}
                </li>
              ))}</ul>
            </div>
          </div></div>
        </div>
        <div className="border-top mt-8 pt-6 row small">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
            <p>© 2026 Masomo Portal. All rights reserved. Developed by <a href="https://steve.com/" className="link-primary" target="_blank" rel="noreferrer">Steve Ongera</a></p>
            <div className="d-flex gap-2">{socials.map(([icon, name, url]) => (
              <a href={url} key={name} target="_blank" rel="noreferrer" aria-label={name} className="btn rounded-circle btn-light d-inline-flex align-items-center justify-content-center p-0" style={{ width: 32, height: 32 }}><i className={`bi ${icon}`}></i></a>
            ))}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function SignupModal() {
  const f = (id, label, type, ph) => (
    <div className="mb-3"><label htmlFor={id} className="form-label">{label}</label>
      <input id={id} type={type} className="form-control" placeholder={ph} required /></div>
  )
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog"><div className="modal-content rounded-5"><div className="modal-body p-6">
        <div className="d-flex justify-content-between mb-3">
          <h2 className="card-title mb-5 h5" id="exampleModalLabel">Create your account</h2>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form className="mt-3" onSubmit={e => e.preventDefault()}>
          {f('fullName', 'Full name', 'text', 'Jane Doe')}
          {f('email', 'Email address', 'email', 'name@example.com')}
          {f('password', 'Password', 'password', 'Create a password')}
          <div className="mb-3 form-check">
            <input id="terms" className="form-check-input" type="checkbox" required />
            <label className="form-check-label small" htmlFor="terms">I agree to the <a href="#" className="text-decoration-none">terms and privacy</a></label>
          </div>
          <button className="btn btn-primary" type="submit">Sign up</button>
        </form>
      </div></div></div>
    </div>
  )
}


export function Loader() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center bg-white"
      style={{ position: 'fixed', inset: 0, zIndex: 2000 }}
      role="status"
      aria-live="polite"
    >
      <div className="spinner-border text-primary" aria-hidden="true"></div>
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
      className="btn rounded-circle d-flex align-items-center justify-content-center text-white shadow-lg position-fixed"
      style={{ right: 'clamp(16px, 5vw, 112px)', bottom: 'clamp(16px, 5vw, 112px)', width: 56, height: 56, zIndex: 1040, backgroundColor: '#25D366', borderColor: '#25D366' }}
    >
      <i className="bi bi-whatsapp fs-3"></i>
    </a>
  )
}