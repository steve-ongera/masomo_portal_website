import { Seo } from '../components/Layout.jsx'
import { PageHeader, Pricing, Solutions, Faq, Cta } from '../components/Sections.jsx'
import { img } from '../data.js'
export default function PricingPage() {
  return (<>
    <Seo title="Pricing | Masomo Portal Software Plans" description="Transparent software development pricing. Choose Starter, Pro or Enterprise with a 14-day money-back guarantee." />
    <PageHeader  title="Transparent Pricing for Schools" accent="of Every Size" text="Whether you need an MVP or an enterprise platform, our plans are simple, flexible and backed by a 14-day guarantee." image={img.pricing} alt="Analytics dashboard showing software project costs" />
    <Pricing /><Solutions /><Faq /><Cta />
  </>)
}
