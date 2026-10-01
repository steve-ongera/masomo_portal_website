import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon.jsx'

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
    <span className="text-primary"><Icon name="book" size={28} /></span>
    <span className="fw-bold">MasomoPortal</span>
  </Link>
)
const links = [['/', 'Home'], ['/about', 'About'], ['/pricing', 'Pricing'], ['/testimonials', 'Testimonials'], ['/contact', 'Contact Us']]

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <Logo nav />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {links.map(([to, l]) => (
              <li className="nav-item" key={to}><NavLink end to={to} className="nav-link">{l}</NavLink></li>
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
            >
              <i className="bi bi-whatsapp"></i>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

const cols = [
  ['Product', [['Solutions', '/'], ['Pricing', '/pricing'], ['Testimonials', '/testimonials'], ['Contact', '/contact']]],
  ['Company', [['About Us', '/about'], ['Careers', '/about'], ['Blog', '/'], ['Press', '/']]],
  ['Support', [['Help Center', '/contact'], ['Contact Us', '/contact'], ['Privacy Policy', '/'], ['Terms of Service', '/']]],
  ['Services', [['Web Development', '/'], ['UI/UX Design', '/'], ['Cloud & DevOps', '/'], ['Data & AI', '/']]],
]
export function Footer() {
  return (
    <footer className="pt-lg-13 bg-light py-8">
      <div className="container">
        <div className="row gy-8">
          <div className="col-md-4">
            <Logo />
            <p className="mt-4 mb-6">Empowering businesses worldwide with custom software, cloud and AI solutions built by expert engineers.</p>
            <div className="d-flex flex-column gap-2">
              {[['mail', 'hello@masomoportal.com'], ['phone', '+254 (234) 567-890'], ['pin', 'Mombasa, Kenya']].map(([i, t]) => (
                <span className="d-flex align-items-center gap-2" key={t}><span className="text-primary"><Icon name={i} size={18} /></span><span>{t}</span></span>
              ))}
            </div>
          </div>
          <div className="col-md-8"><div className="row">
            {cols.map(([h, ls]) => (
              <div className="col-lg-3 col-md-6" key={h}>
                <h4 className="fs-5 mb-4">{h}</h4>
                <ul className="list-unstyled lh-lg small">{ls.map(([l, to]) => <li key={l}><Link to={to}>{l}</Link></li>)}</ul>
              </div>
            ))}
          </div></div>
        </div>
        <div className="border-top mt-8 pt-6 row small">
          <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
            <p>© 2026 Masomo Portal. All rights reserved. Developed by <a href="https://steve.com/" className="link-primary" target="_blank" rel="noreferrer">Steve Ongera</a></p>
            <div>{['x', 'linkedin', 'github'].map(i => (
              <a href="#" key={i} aria-label={i} className="btn rounded-circle btn-light btn-icon btn-xs"><Icon name={i} size={14} /></a>
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