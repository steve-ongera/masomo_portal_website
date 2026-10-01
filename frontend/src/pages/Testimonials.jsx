import { Seo } from '../components/Layout.jsx'
import { PageHeader, Testimonials, Process, Cta } from '../components/Sections.jsx'
import { img } from '../data.js'
export default function TestimonialsPage() {
  return (<>
    <Seo title="Client Testimonials | Masomo Portal Reviews" description="Read reviews from founders and product leaders who built software with Masomo Portal." />
    <PageHeader tag="Testimonials" title="Trusted and Loved by" accent="Schools and Clients Worldwide" text="Real stories from teams that launched faster and scaled smarter with our engineers." image={img.contact} alt="Happy clients in a meeting with Masomo Portal" />
    <Testimonials all /><Process /><Cta />
  </>)
}
