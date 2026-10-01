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
  { t:'School Management Systems', b:'System', c:'bg-warning', img:img.s1, who:'Trisha Leo', a:0, d:'12 weeks', n:'2.4K', r:'4.9', p:'KES 350,000', alt:'Developer building a school management system on a laptop' },
  { t:'School Websites & Landing Pages', b:'Web', c:'bg-danger', img:img.s2, who:'Sarah Johnson', a:1, d:'8 weeks', n:'1.8K', r:'4.8', p:'KES 80,000', alt:'Team designing a school website and landing page' },
  { t:'University & College Portals', b:'Portal', c:'bg-info', img:img.s3, who:'Mike Chen', a:2, d:'16 weeks', n:'3.2K', r:'4.9', p:'KES 650,000', alt:'Student portal dashboard running on cloud infrastructure' },
  { t:'Fees, Results & SMS Automation', b:'Fees', c:'bg-success', img:img.s4, who:'Emma Davis', a:3, d:'6 weeks', n:'1.5K', r:'4.7', p:'KES 120,000', alt:'Staff reviewing automated fees and results reports' },
]
export const team = [
  { n:'Mr. Steve Ongera', r:'Chief Technology Officer', a:0, s:'4.9', d:'12+ years building scalable platforms. Led school and college system rollouts across Kenya.', k:'120+', k2:'Projects' },
  { n:'Sarah Johnson', r:'Head of Product Design', a:1, s:'4.8', d:'10+ years crafting simple interfaces for teachers, students and parents.', k:'90+', k2:'Products' },
  { n:'Mike Chen', r:'Lead Data Engineer', a:2, s:'4.9', d:'7+ years in student records, exam analytics and reporting in production.', k:'60+', k2:'Pipelines' },
  { n:'Emma Davis', r:'Delivery Director', a:3, s:'4.8', d:'9+ years leading agile teams that deploy systems in schools across Kenya.', k:'150+', k2:'Launches' },
]
export const why = [
  ['bi-people','Dedicated Teams','Engineers, designers and QA embedded in your school project from day one.'],
  ['bi-chat-dots','Transparent Updates','Weekly demos, shared boards and direct chat with the people building.'],
  ['bi-calendar-check','Agile Sprints','Two-week sprints with working features at the end of every cycle.'],
  ['bi-bell','Post-launch Support','Training, maintenance and quick fixes after your system goes live.'],
  ['bi-globe','Nationwide Delivery','Schools and colleges across Kenya served with on-site and remote training.'],
  ['bi-heart','True Partnership','We treat your institution like our own and share the risk.'],
]
export const steps = [
  ['Discover','We study your school, staff and students in a free workshop.'],
  ['Design','Wireframes and clickable prototypes validate the idea early.'],
  ['Develop','Agile sprints deliver tested, production-ready modules.'],
  ['Deploy & Support','Launch on secure cloud hosting with staff training and ongoing care.'],
]
export const reviews = [
  ['Alex Thompson','Principal, Lakeview High School','The Masomo Portal team set up our school system in 12 weeks. Communication and quality were outstanding.',0],
  ['Jessica Lee','Deputy Principal, Greenfield Academy','Their fees and results module cut our paperwork by 38%. They feel like part of our own team.',1],
  ['David Park','ICT Manager, Rift Valley College','The reporting system they built gives us real-time visibility across 40 classes.',2],
  ['Maria Garcia','Registrar, Coastal University','Secure, reliable and on time. Our student portal launched without a single critical bug.',3],
  ['James Wilson','Director, Bright Future Schools','From a simple website to a full system, Masomo Portal grew with us. Best technical partner we have had.',4],
  ['Emily Chen','Bursar, Highlands Technical College','Their M-Pesa fee setup cut our reconciliation time from hours to minutes. Highly recommended.',5],
]
export const plans = [
  { n:'Starter', s:'For small schools', p:'KES 45,000', per:'/project', f:['School landing page','Responsive design','Basic SEO setup','Email support','14-day bug fixes'], btn:'Get Started', hl:false },
  { n:'Pro', s:'Most popular choice', p:'KES 150,000', per:'/project', f:['Dedicated dev team','Full school system','Cloud hosting setup','Priority support 24/7','Weekly demos','M-Pesa fee payments','Staff training & documentation'], btn:'Start Pro Trial', hl:true },
  { n:'Enterprise', s:'For colleges and universities', p:'Custom', per:'', f:['Everything in Pro','Custom integrations','Single sign-on & security','Dedicated success manager','SLA-backed uptime','Invoice billing'], btn:'Contact Sales', hl:false },
]
export const faqs = [
  ['How long does a typical project take?','Landing pages launch in 2 to 4 weeks. Full school systems take 8 to 12 weeks and are planned in phases so you see value early.'],
  ['Do you offer post-launch support?','Yes. All plans include a warranty period, and Pro and Enterprise include ongoing maintenance, training and monitoring.'],
  ['Which technologies do you use?','React, Django, Python, Node.js, Flutter, PostgreSQL and M-Pesa integration, chosen to fit your institution.'],
  ['Can I cancel anytime?','Monthly plans can be cancelled anytime, and every plan has a 14-day money-back guarantee.'],
]