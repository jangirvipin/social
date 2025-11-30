import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'SEO', 'Paid Ads', 'Social Media', 'Content', 'Web Design']

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Revenue Explosion',
    client: 'FashionForward',
    category: 'SEO',
    result: '+245% Revenue',
    description: 'How we helped an online fashion retailer increase organic revenue by 245% in 8 months.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    metrics: [
      { label: 'Revenue Increase', value: '+245%' },
      { label: 'Organic Traffic', value: '+180%' },
      { label: 'Conversion Rate', value: '+35%' },
    ],
  },
  {
    id: 2,
    title: 'SaaS Lead Generation Machine',
    client: 'CloudStack Pro',
    category: 'Paid Ads',
    result: '+180% Leads',
    description: 'Scaling a B2B SaaS company\'s lead generation with Google and LinkedIn ads.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    metrics: [
      { label: 'Lead Volume', value: '+180%' },
      { label: 'Cost Per Lead', value: '-42%' },
      { label: 'ROAS', value: '5.2x' },
    ],
  },
  {
    id: 3,
    title: 'Viral Brand Campaign',
    client: 'GreenLife Organics',
    category: 'Social Media',
    result: '+500K Reach',
    description: 'Building a sustainable brand\'s social presence from scratch.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
    metrics: [
      { label: 'Monthly Reach', value: '500K+' },
      { label: 'Engagement Rate', value: '8.5%' },
      { label: 'Follower Growth', value: '+340%' },
    ],
  },
  {
    id: 4,
    title: 'Content-Led Growth Strategy',
    client: 'FinanceHub',
    category: 'Content',
    result: '+320% Traffic',
    description: 'How strategic content marketing drove massive organic growth for a finance platform.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
    metrics: [
      { label: 'Organic Traffic', value: '+320%' },
      { label: 'Keywords Ranked', value: '2,400+' },
      { label: 'Backlinks Earned', value: '850+' },
    ],
  },
  {
    id: 5,
    title: 'Healthcare Lead Generation',
    client: 'MedCare Solutions',
    category: 'Paid Ads',
    result: '+150% Appointments',
    description: 'Driving patient appointments for a multi-location healthcare provider.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
    metrics: [
      { label: 'Appointments', value: '+150%' },
      { label: 'Cost Per Appointment', value: '-38%' },
      { label: 'Phone Calls', value: '+200%' },
    ],
  },
  {
    id: 6,
    title: 'Conversion-Focused Redesign',
    client: 'LegalEase',
    category: 'Web Design',
    result: '+85% Conversions',
    description: 'Redesigning a law firm\'s website to maximize lead generation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    metrics: [
      { label: 'Conversion Rate', value: '+85%' },
      { label: 'Time on Site', value: '+45%' },
      { label: 'Bounce Rate', value: '-30%' },
    ],
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedStudy, setSelectedStudy] = useState(null)

  const filteredStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter((study) => study.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#111111]" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-medium tracking-wider uppercase mb-4">Our Work</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Case Studies & <span className="gradient-text">Results</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses achieve measurable growth.
          </p>
        </div>
      </section>

      {/* Filter & Portfolio Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedStudy(study)}
                className="group cursor-pointer relative overflow-hidden rounded-2xl glass-card"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full mb-3">
                    {study.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-2xl font-bold gradient-text">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="relative w-full max-w-3xl glass-card p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img
              src={selectedStudy.image}
              alt={selectedStudy.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full mb-4">
              {selectedStudy.category}
            </span>
            
            <h2 className="text-3xl font-bold text-white mb-2">{selectedStudy.title}</h2>
            <p className="text-gray-400 mb-2">Client: {selectedStudy.client}</p>
            <p className="text-gray-300 mb-8">{selectedStudy.description}</p>
            
            <h3 className="text-xl font-semibold text-white mb-4">Key Results</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {selectedStudy.metrics.map((metric, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">{metric.value}</p>
                  <p className="text-gray-400 text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
            
            <Link
              to="/contact"
              className="inline-block w-full py-3 text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get Similar Results
            </Link>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Want Results Like These?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help grow your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            Start Your Success Story
          </Link>
        </div>
      </section>
    </>
  )
}
