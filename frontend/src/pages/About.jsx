import { Seo } from '../components/Layout.jsx'
import { PageHeader, Process, Team, Why, Cta } from '../components/Sections.jsx'
import { img } from '../data.js'
export default function About() {
  const stats = [['50K+', 'Active users'], ['200+', 'Projects delivered'], ['30+', 'Counties served'], ['4.9', 'Average rating']]
  return (<>
    <Seo title="About Masomo Portal | Our Story and Software Team" description="Learn how Masomo Portal grew into a trusted software provider for schools, colleges and universities in Kenya." />
    <PageHeader tag="About Us" title="We Build Systems" accent="That Move Schools Forward" text="Masomo Portal started as a small team of developers and has grown into a software provider serving schools, colleges and universities across Kenya." image={img.about} alt="Masomo Portal team meeting about a school system project" />
    <section className="py-lg-13 py-8"><div className="container"><div className="row align-items-center gy-8">
      <div className="col-lg-6"><img src={img.code} alt="Source code on a developer screen" className="rounded-5 img-fluid shadow-sm" loading="lazy" /></div>
      <div className="col-lg-6">
        <span className="text-primary text-uppercase small fw-semibold" style={{ letterSpacing: '.125rem' }}>Our Mission</span>
        <h2 className="fw-bold mt-4 mb-4">Technology That Is <span className="text-primary">Accessible</span> to Everyone</h2>
        <p>We believe great software should not be limited to big institutions. Our mission is to give high schools, colleges and universities in Kenya the same engineering quality used by global tech leaders.</p>
        <p>Every project is led by senior engineers, tested thoroughly and delivered with clear documentation so your school always owns its system.</p>
      </div>
    </div></div></section>
    <section className="py-8 bg-light bg-opacity-50"><div className="container"><div className="row text-center g-4">
      {stats.map(([n, l]) => <div className="col-6 col-lg-3" key={l}><div className="display-5 fw-bold text-primary">{n}</div><p className="mb-0">{l}</p></div>)}
    </div></div></section>
    <Why /><Process /><Team /><Cta />
  </>)
}