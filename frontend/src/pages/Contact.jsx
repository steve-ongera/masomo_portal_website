import { useState } from 'react'
import { Seo } from '../components/Layout.jsx'
import Icon from '../components/Icon.jsx'
import { PageHeader, Faq } from '../components/Sections.jsx'
import { img } from '../data.js'
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const on = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async e => {
    e.preventDefault(); setStatus('sending')
    try {
      const r = await fetch('/api/contact/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (!r.ok) throw new Error()
      setStatus('ok'); setForm({ name: '', email: '', subject: '', message: '' })
    } catch { setStatus('error') }
  }
  const info = [['mail', 'Email', 'steveongera001@gmail.com'], ['phone', 'Phone', '+254 112 284 093'], ['pin', 'Office', 'Nairobi, Kenya']]
  return (<>
    <Seo title="Contact Us | Masomo Portal" description="Contact Masomo Portal for a free software project estimate. We reply within 24 hours." />
    <PageHeader tag="Contact Us" title="Let's Build Your Next Great" accent="Digital Product Together" text="Share your idea and our team will reply within 24 hours with next steps and a free estimate." image={img.contact} alt="Masomo Portal team ready to discuss your software project" />
    <section className="py-lg-13 py-8"><div className="container"><div className="row g-6">
      <div className="col-lg-5">
        <h2 className="fw-bold mb-4">Get in <span className="text-primary">Touch</span></h2>
        {info.map(([i, t, v]) => <div className="d-flex gap-4 mb-4" key={t}>
          <div className="icon-shape icon-md bg-primary bg-opacity-10 rounded-circle text-primary flex-shrink-0"><Icon name={i} size={18} /></div>
          <div><h3 className="h6 mb-0">{t}</h3><p className="mb-0 small">{v}</p></div></div>)}
        <iframe title="Masomo Portal office location in Nairobi" className="rounded-5 w-100 mt-4 border-0" height="260" loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=36.77%2C-1.32%2C36.87%2C-1.25&layer=mapnik&marker=-1.2864%2C36.8172"></iframe>
      </div>
      <div className="col-lg-7"><div className="card shadow-sm rounded-5"><div className="card-body p-8">
        <h2 className="h4 fw-bold mb-4">Send us a message</h2>
        <form onSubmit={submit}><div className="row g-3">
          <div className="col-md-6"><label htmlFor="name" className="form-label">Full name</label><input id="name" name="name" className="form-control" value={form.name} onChange={on} required /></div>
          <div className="col-md-6"><label htmlFor="cemail" className="form-label">Email</label><input id="cemail" name="email" type="email" className="form-control" value={form.email} onChange={on} required /></div>
          <div className="col-12"><label htmlFor="subject" className="form-label">Subject</label><input id="subject" name="subject" className="form-control" value={form.subject} onChange={on} required /></div>
          <div className="col-12"><label htmlFor="message" className="form-label">Message</label><textarea id="message" name="message" rows="5" className="form-control" value={form.message} onChange={on} required /></div>
          <div className="col-12"><button className="btn btn-primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Message'}</button></div>
          {status === 'ok' && <div className="col-12 text-success small">Thank you! We will reply within 24 hours.</div>}
          {status === 'error' && <div className="col-12 text-danger small">Something went wrong. Please try again.</div>}
        </div></form>
      </div></div></div>
    </div></div></section>
    <Faq />
  </>)
}