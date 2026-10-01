import { Seo } from '../components/Layout.jsx'
import { Hero, Solutions, Process, Team, Why, Testimonials, Pricing, Faq, Cta } from '../components/Sections.jsx'
export default function Home() {
  return (<>
    <Seo title="Masomo Portal | Custom Software Development Company" description="Masomo Portal builds custom software, web and mobile apps, cloud and AI solutions for growing businesses." />
    <Hero /><Solutions /><Process /><Team /><Why /><Testimonials /><Pricing /><Faq /><Cta />
  </>)
}
