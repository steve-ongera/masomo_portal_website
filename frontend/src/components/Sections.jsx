import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { img, av, solutions, team, why, steps, reviews, plans, faqs } from '../data.js'

export const Stars = ({ n = 5, size = 18 }) => (
  <div className="d-flex gap-0 align-items-center">{Array.from({ length: n }, (_, i) => <Icon key={i} name="star" size={size} className="text-warning" />)}</div>
)
export const Heading = ({ tag, title, accent, text, w = 'col-lg-6' }) => (
  <div className="row text-center"><div className={`${w} mx-auto`}><div className="mb-10">
    <span className="text-primary text-uppercase small fw-semibold" style={{ letterSpacing: '.125rem' }}>{tag}</span>
    <h2 className="fw-bold mt-4 mb-4">{title} <span className="text-primary">{accent}</span></h2>
    <p className="mb-0">{text}</p>
  </div></div></div>
)
export const PageHeader = ({ tag, title, accent, text, image, alt }) => (
  <section className="py-lg-13 py-8 bg-white position-relative"><div className="circle-bg d-none d-lg-block"></div>
    <div className="container"><div className="row align-items-center gy-8">
      <div className="col-lg-6">
        
        <h1 className="display-4 fw-bold mt-4">{title} <span className="text-primary">{accent}</span></h1>
        <p className="my-6 lead fw-normal">{text}</p>
        <Link to="/contact" className="btn btn-primary"><span>Talk to Us</span><Icon name="arrow" className="ms-2" /></Link>
      </div>
      <div className="col-lg-6"><div className="card p-3 rounded-5 shadow-sm"><img src={image} alt={alt} className="rounded-5 img-fluid" loading="lazy" /></div></div>
    </div></div>
  </section>
)

export function Hero() {
  const stats = [['users', '50K+', 'Users'], ['book', '200+', 'Projects'], ['award', '4.9', 'Rating']]
  return (
    <section className="py-lg-13 py-8 bg-white position-relative" id="hero"><div className="circle-bg d-none d-lg-block"></div>
      <div className="container"><div className="row align-items-center gy-8">
        <div className="col-lg-6">
          
          <h1 className="display-4 fw-bold mt-4">Custom Software <span className="text-primary">Built to Scale,</span> Delivered on Time</h1>
          <p className="my-6 lead fw-normal">Masomo Portal is a software provider helping 50,000+ users and 200+ businesses launch web apps, mobile apps and cloud platforms that grow.</p>
          <div className="d-flex flex-md-row flex-column justify-content-start gap-3">
            <Link to="/contact" className="btn btn-primary"><span>Start Your Project</span><Icon name="arrow" className="ms-2" /></Link>
            <Link to="/pricing" className="btn btn-light"><Icon name="youtube" className="text-danger" /><span className="ms-1">View Pricing</span></Link>
          </div>
          <div className="d-flex gap-6 mt-8">
            {stats.map(([i, b, t]) => <div className="d-flex align-items-center gap-2" key={t}><Icon name={i} size={20} className="text-primary" /><small className="mb-0"><span className="fw-bold">{b}</span> {t}</small></div>)}
          </div>
        </div>
        <div className="col-lg-6"><div className="card p-3 rounded-5 shadow-sm"><div className="position-relative">
          <img src={img.hero} alt="Software engineers collaborating on a project at Masomo Portal" className="rounded-5 img-fluid" />
          <div className="position-absolute top-0 end-0 me-n8 mt-n4 d-none d-lg-block">
            <div className="bg-white shadow-sm rounded-pill d-flex align-items-center gap-3 px-3 py-2 mb-4 border" style={{ width: 180 }}>
              <div className="avatar-group">{av.slice(0, 3).map((a, i) => <img key={i} src={a} alt="Happy client" className="avatar avatar-sm rounded-circle" />)}</div>
              <div className="d-flex flex-column text-xs lh-sm"><span className="fw-bold">Join 50k+</span><span>Users</span></div>
            </div>
          </div>
          <div className="position-absolute bottom-0 start-0 ms-n8 mb-n8 d-none d-lg-block">
            <div className="bg-white shadow-sm rounded-pill d-flex align-items-center gap-2 px-3 py-2 mb-4 border" style={{ width: 170 }}>
              <div className="icon-shape icon-md rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center"><Icon name="book" size={24} /></div>
              <div className="d-flex flex-column text-xs lh-sm"><span className="fw-bold">200+ Projects</span><span>Delivered</span></div>
            </div>
          </div>
        </div></div></div>
      </div></div>
    </section>
  )
}

export function Solutions() {
  return (
    <section className="py-lg-13 py-8" id="solutions"><div className="container">
      <Heading tag="Solutions" title="Explore Our Popular" accent="Solutions" text="From idea to launch, our engineers deliver software that helps you achieve your business goals." />
      <div className="row g-4">{solutions.map(s => (
        <div className="col-lg-3 col-md-6" key={s.t}><div className="card shadow-sm h-100 rounded-5 card-lift">
          <div className="position-relative overflow-hidden">
            <img src={s.img} className="rounded-top-5 card-img-top" alt={s.alt} loading="lazy" />
            <div className="position-absolute top-0 start-0 p-3"><span className={`badge ${s.c} rounded-pill fw-normal text-xs`}>{s.b}</span></div>
          </div>
          <div className="card-body p-6">
            <h3 className="mb-1 fs-6">{s.t}</h3>
            <div className="text-xs d-flex gap-2 align-items-center mt-4 mb-8"><img src={av[s.a]} alt={s.who} className="avatar avatar-xs rounded-circle" /><span>{s.who}</span></div>
            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
              {[['clock', s.d], ['users', s.n], ['star', s.r]].map(([i, v]) => <div key={i} className="text-xs align-items-center d-flex gap-1 lh-1"><Icon name={i} size={14} className={i === 'star' ? 'text-warning' : ''} /><span>{v}</span></div>)}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <span className="fs-5 text-dark fw-bold">{s.p}</span>
              <Link to="/contact" className="small link-primary"><span>Get a quote</span><Icon name="arrow" className="ms-1" /></Link>
            </div>
          </div>
        </div></div>
      ))}</div>
    </div></section>
  )
}

export function Team() {
  return (
    <section className="py-lg-13 py-8 bg-light bg-opacity-25" id="team"><div className="container">
      <Heading w="col-lg-5" tag="Our Team" title="Meet The" accent="Experts" text="Our leaders have years of experience shipping software for startups and enterprises." />
      <div className="row g-4">{team.map(m => (
        <div className="col-lg-3 col-md-6 mb-4" key={m.n}><div className="card shadow-sm h-100 rounded-5 text-center p-6 card-lift">
          <div className="position-relative mb-4">
            <img src={av[m.a + 2 > 5 ? m.a : m.a + 2]} alt={`${m.n}, ${m.r} at Masomo Portal`} className="rounded-circle mb-4 mx-auto avatar avatar-xl border border-3 border-warning" />
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-2"><span className="badge bg-warning text-xs"><span>{m.s}</span> <Icon name="star" size={12} className="text-white" /></span></div>
          </div>
          <h3 className="h6 fw-bold mb-1">{m.n}</h3>
          <span className="text-muted mb-3 d-block text-xs">{m.r}</span>
          <p className="mb-4">{m.d}</p>
          <div className="d-flex justify-content-center gap-2 small"><span className="fw-bold text-dark">{m.k}</span><span>{m.k2}</span></div>
          <div className="d-flex flex-row align-items-center justify-content-center gap-2 mt-4 mb-2">
            {['x', 'linkedin', 'github'].map(i => <a href="#" key={i} aria-label={`${m.n} on ${i}`} className="btn rounded-circle btn-light btn-icon btn-xs"><Icon name={i} size={14} /></a>)}
          </div>
        </div></div>
      ))}</div>
    </div></section>
  )
}

export function Why() {
  const rings = ['primary', 'warning', 'danger']
  return (
    <section className="py-lg-13 py-8 position-relative" id="why"><div className="circle-bg d-none d-lg-block"></div>
      <div className="container"><div className="row align-items-center gy-8">
        <div className="col-xl-6">
          <div className="mb-10 pe-lg-12">
            <span className="text-primary text-uppercase small fw-semibold" style={{ letterSpacing: '.125rem' }}>Why Masomo Portal</span>
            <h2 className="fw-bold mt-4 mb-4">A Software Partner <span className="text-primary">You Can Trust</span></h2>
            <p className="mb-0">We combine senior engineers, proven processes and honest communication so your product ships faster and grows with you.</p>
          </div>
          <div className="row g-6">{why.map(([i, t, d]) => (
            <div className="col-md-6" key={t}><div className="d-flex gap-4">
              <div className="icon-shape icon-md bg-primary bg-opacity-10 rounded-circle text-primary flex-shrink-0"><Icon name={i} size={18} /></div>
              <div><h3 className="h6">{t}</h3><p className="mb-0 small">{d}</p></div>
            </div></div>
          ))}</div>
          <div className="row mt-10"><div className="col-lg-12"><Link to="/contact" className="btn btn-primary">Work With Us</Link></div></div>
        </div>
        <div className="col-xl-6"><div className="card shadow-lg rounded-5"><div className="card-body p-8 py-8">
          {[0, 3].map(r => <div className="row mb-4 justify-content-center gx-2 text-center" key={r}>{[0, 1, 2].map(c => (
            <div className="col-4" key={c}><img src={av[(r + c) % 6]} alt="Masomo Portal client" className={`rounded-circle avatar avatar-xxxl border border-3 border-${rings[c]} border-opacity-25`} loading="lazy" /></div>
          ))}</div>)}
          <img src={img.office} alt="Masomo Portal modern software development office" className="rounded-4 img-fluid" loading="lazy" />
        </div>
          <div className="position-absolute top-0 end-0 me-lg-n8 mt-n4 d-none d-md-block"><div className="bg-white shadow-sm rounded-pill d-flex align-items-center gap-3 px-3 py-3 mb-4 border" style={{ width: 200 }}>
            <div className="icon-shape icon-md rounded-circle bg-primary bg-opacity-10 text-primary"><Icon name="msg" size={18} /></div>
            <div className="d-flex flex-column"><span className="fw-bold">24/7 Support</span><small>Always here</small></div></div></div>
          <div className="position-absolute bottom-0 start-0 ms-md-n8 mb-n8 d-none d-md-block"><div className="bg-white shadow-sm rounded-pill d-flex align-items-center gap-3 px-3 py-3 mb-4 border" style={{ width: 200 }}>
            <div className="icon-shape icon-md rounded-circle bg-primary bg-opacity-10 text-primary"><Icon name="world" size={18} /></div>
            <div className="d-flex flex-column"><span className="fw-bold">150+ Countries</span><small>Worldwide reach</small></div></div></div>
        </div></div>
      </div></div>
    </section>
  )
}

export function Process() {
  return (
    <section className="py-lg-13 py-8 bg-light bg-opacity-50"><div className="container">
      <Heading tag="Our Process" title="How We" accent="Deliver" text="A simple, transparent four-step workflow that keeps you in control." />
      <div className="row g-4">{steps.map(([t, d], i) => (
        <div className="col-lg-3 col-md-6" key={t}><div className="card rounded-5 shadow-sm h-100 border"><div className="card-body p-6 text-center">
          <div className="icon-shape icon-xl rounded-circle bg-primary bg-opacity-10 text-primary mx-auto mb-4 fw-bold fs-4">{i + 1}</div>
          <h3 className="h6 fw-bold">{t}</h3><p className="mb-0 small">{d}</p>
        </div></div></div>
      ))}</div>
    </div></section>
  )
}

export const Review = ({ r }) => (
  <div className="col-lg-4 col-12"><div className="card rounded-5 shadow-sm h-100 border"><div className="card-body p-6">
    <Stars />
    <div className="mt-4 mb-2"><Icon name="quote" size={24} className="text-primary" /></div>
    <p className="fw-semibold">“{r[2]}”</p>
    <div className="mt-7 pt-5 border-top"><div className="d-flex gap-3 align-items-center">
      <img src={av[r[3]]} alt={`${r[0]}, ${r[1]}`} className="avatar avatar-md rounded-circle" loading="lazy" />
      <div><h3 className="h6 mb-0">{r[0]}</h3><small>{r[1]}</small></div>
    </div></div>
  </div></div></div>
)
export function Testimonials({ all }) {
  return (
    <section className="py-lg-13 py-8 bg-light bg-opacity-50" id="testimonials"><div className="container">
      <Heading w="col-12" tag="Testimonials" title="What Our" accent="Clients" text="Join hundreds of businesses that grew with software built by Masomo Portal." />
      <div className="row gx-4 gy-6">{(all ? reviews : reviews.slice(0, 3)).map(r => <Review key={r[0]} r={r} />)}</div>
      {!all && <div className="text-center mt-10"><Link to="/testimonials" className="btn btn-outline-dark">Read All Reviews<Icon name="arrow" className="ms-1" /></Link></div>}
    </div></section>
  )
}

export function Pricing() {
  return (
    <section className="py-lg-13 py-8" id="pricing"><div className="container">
      <Heading w="col-12" tag="Pricing" title="Simple, Transparent" accent="Pricing" text="Choose the plan that fits your project. No hidden fees, cancel anytime." />
      <div className="row g-4 mx-xxl-13">{plans.map(p => (
        <div className="col-lg-4" key={p.n}><div className={`card shadow-sm rounded-5 h-100 ${p.hl ? 'border-primary' : ''}`}><div className="card-body p-6">
          <div className="text-center mt-5 mb-9">
            <span className="text-dark fs-5 fw-bold">{p.n}</span><p className="mt-1">{p.s}</p>
            <div className="d-flex gap-0 justify-content-center align-items-end"><span className="fw-bold h2 mb-0">{p.p}</span><span>{p.per}</span></div>
          </div>
          <ul className="list-unstyled mb-4 d-flex flex-column gap-2 small">{p.f.map(f => (
            <li className="d-flex gap-3" key={f}><span className="icon-shape icon-xs bg-primary bg-opacity-10 text-primary rounded-circle"><Icon name="check" size={14} /></span><span>{f}</span></li>
          ))}</ul>
          <div className="d-grid"><Link to="/contact" className={`btn ${p.hl ? 'btn-primary' : 'btn-light'}`}>{p.btn}</Link></div>
        </div>
          {p.hl && <span className="badge bg-primary position-absolute top-0 start-50 translate-middle-x mt-n3 rounded-pill text-xs">Most Popular</span>}
        </div></div>
      ))}</div>
      <p className="mb-0 small text-center mt-8">All plans include a 14-day money-back guarantee. No questions asked.</p>
    </div></section>
  )
}

export function Faq() {
  return (
    <section className="py-lg-13 py-8"><div className="container">
      <Heading tag="FAQ" title="Frequently Asked" accent="Questions" text="Quick answers to what clients ask us most." />
      <div className="row"><div className="col-lg-8 mx-auto"><div className="accordion" id="faq">{faqs.map(([q, a], i) => (
        <div className="accordion-item" key={q}>
          <h3 className="accordion-header"><button className={`accordion-button ${i ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#f${i}`}>{q}</button></h3>
          <div id={`f${i}`} className={`accordion-collapse collapse ${i ? '' : 'show'}`} data-bs-parent="#faq"><div className="accordion-body">{a}</div></div>
        </div>
      ))}</div></div></div>
    </div></section>
  )
}

export const Cta = () => (
  <section className="py-lg-13 py-8"><div className="container"><div className="card bg-primary text-white rounded-5 p-8 text-center border-0">
    <h2 className="fw-bold text-white">Ready to build your next software product?</h2>
    <p className="lead mb-6">Tell us about your idea and get a free estimate within 48 hours.</p>
    <div><Link to="/contact" className="btn btn-light">Get a Free Quote<Icon name="arrow" className="ms-2" /></Link></div>
  </div></div></section>
)
