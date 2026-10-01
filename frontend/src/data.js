const u = (id, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`
export const img = {
  hero: u('photo-1522071820081-009f0129c71c'), about: u('photo-1531482615713-2afd69097998'),
  office: u('photo-1504384308090-c894fdcc538d'), code: u('photo-1498050108023-c5249f4df085'),
  contact: u('photo-1556761175-5973dc0f32e7'), pricing: u('photo-1460925895917-afdab827c52f'),
  s1: u('photo-1517694712202-14dd9538aa97', 600), s2: u('photo-1551434678-e076c223a692', 600),
  s3: u('photo-1460925895917-afdab827c52f', 600), s4: u('photo-1519389950473-47ba0277781c', 600),
}
const face = id => u(id, 200)
export const av = [
  face('photo-1507003211169-0a1dd7228f2d'), face('photo-1494790108377-be9c29b29330'), face('photo-1500648767791-00dcc994a43e'),
  face('photo-1438761681033-6461ffad8d80'), face('photo-1472099645785-5658abf4ff4e'), face('photo-1534528741775-53994a69daeb'),
]
export const solutions = [
  { t:'Custom Software Development', b:'Development', c:'bg-warning', img:img.s1, who:'Trisha Leo', a:0, d:'12 weeks', n:'2.4K', r:'4.9', p:'From $4,900', alt:'Developer writing custom software code on a laptop' },
  { t:'Web & Mobile App Design', b:'Design', c:'bg-danger', img:img.s2, who:'Sarah Johnson', a:1, d:'8 weeks', n:'1.8K', r:'4.8', p:'From $3,200', alt:'Team designing a web and mobile app interface' },
  { t:'Cloud, DevOps & Security', b:'Cloud', c:'bg-info', img:img.s3, who:'Mike Chen', a:2, d:'16 weeks', n:'3.2K', r:'4.9', p:'From $6,500', alt:'Analytics dashboard running on cloud infrastructure' },
  { t:'Data, AI & Automation', b:'AI', c:'bg-success', img:img.s4, who:'Emma Davis', a:3, d:'6 weeks', n:'1.5K', r:'4.7', p:'From $2,900', alt:'Engineers collaborating on an AI automation project' },
]
export const team = [
  { n:'John Smith', r:'Chief Technology Officer', a:0, s:'4.9', d:'12+ years building scalable platforms. Former Staff Engineer at a global cloud company.', k:'120+', k2:'Projects' },
  { n:'Sarah Johnson', r:'Head of Product Design', a:1, s:'4.8', d:'10+ years crafting UX for SaaS and fintech products used by millions.', k:'90+', k2:'Products' },
  { n:'Mike Chen', r:'Lead Data Engineer', a:2, s:'4.9', d:'7+ years in data pipelines, analytics and machine learning in production.', k:'60+', k2:'Pipelines' },
  { n:'Emma Davis', r:'Delivery Director', a:3, s:'4.8', d:'9+ years leading agile delivery teams across Africa, Europe and the US.', k:'150+', k2:'Launches' },
]
export const why = [
  ['users','Dedicated Teams','Engineers, designers and QA embedded in your project from day one.'],
  ['msg','Transparent Updates','Weekly demos, shared boards and direct chat with the people building.'],
  ['cal','Agile Sprints','Two-week sprints with working software at the end of every cycle.'],
  ['bell','Post-launch Support','Monitoring, maintenance and quick fixes after go-live.'],
  ['world','Global Delivery','Clients in 150+ countries with time-zone friendly collaboration.'],
  ['heart','True Partnership','We treat your product like our own and share the risk.'],
]
export const steps = [
  ['Discover','We study your goals, users and constraints in a free workshop.'],
  ['Design','Wireframes and clickable prototypes validate the idea early.'],
  ['Develop','Agile sprints deliver tested, production-ready features.'],
  ['Deploy & Support','Launch on secure cloud infrastructure with ongoing care.'],
]
export const reviews = [
  ['Alex Thompson','CTO, FinEdge','The Masomo Portal team shipped our payments platform in 12 weeks. Communication and code quality were outstanding.',0],
  ['Jessica Lee','Founder, Shopa','Their UI/UX work lifted our checkout conversion by 38%. They feel like part of our own team.',1],
  ['David Park','Head of Data, Logistix','The analytics pipeline they built gives us real-time visibility across 40 warehouses.',2],
  ['Maria Garcia','COO, HealthBridge','Secure, compliant and on time. Our patient portal launched without a single critical bug.',3],
  ['James Wilson','CEO, Startly','From MVP to Series A, Masomo Portal scaled our product with us. Best technical partner we have had.',4],
  ['Emily Chen','Product Manager, CloudNine','Their DevOps setup cut our deployment time from hours to minutes. Highly recommended.',5],
]
export const plans = [
  { n:'Starter', s:'For small projects', p:'$990', per:'/project', f:['Landing page or MVP','Responsive design','Basic SEO setup','Email support','14-day bug fixes'], btn:'Get Started', hl:false },
  { n:'Pro', s:'Most popular choice', p:'$2,900', per:'/month', f:['Dedicated dev team','Web & mobile apps','Cloud hosting setup','Priority support 24/7','Weekly demos','QA & test automation','Career-grade documentation'], btn:'Start Pro Trial', hl:true },
  { n:'Enterprise', s:'For large organizations', p:'Custom', per:'', f:['Everything in Pro','Custom integrations','SSO & advanced security','Dedicated success manager','SLA-backed uptime','Invoice billing'], btn:'Contact Sales', hl:false },
]
export const faqs = [
  ['How long does a typical project take?','MVPs usually launch in 6 to 12 weeks. Larger platforms are planned in phases so you see value early.'],
  ['Do you offer post-launch support?','Yes. All plans include a warranty period, and Pro and Enterprise include ongoing maintenance and monitoring.'],
  ['Which technologies do you use?','React, Django, Python, Node.js, Flutter, PostgreSQL and AWS/GCP, chosen to fit your product.'],
  ['Can I cancel anytime?','Monthly plans can be cancelled anytime, and every plan has a 14-day money-back guarantee.'],
]
