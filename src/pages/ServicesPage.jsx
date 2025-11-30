import { Link } from 'react-router-dom'

const services = [
  {
    id: 'seo',
    icon: '🔍',
    title: 'Search Engine Optimization',
    shortDesc: 'Boost your organic visibility and drive qualified traffic.',
    description: 'Our comprehensive SEO strategies help you rank higher on search engines, driving organic traffic that converts. We focus on both on-page and off-page optimization to deliver sustainable results.',
    includes: [
      'Technical SEO Audit',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Link Building Campaigns',
      'Local SEO',
      'Monthly Reporting',
    ],
    process: ['Audit', 'Strategy', 'Implementation', 'Monitor', 'Optimize'],
  },
  {
    id: 'social',
    icon: '📱',
    title: 'Social Media Marketing',
    shortDesc: 'Build brand awareness and engage your audience.',
    description: 'We create and execute social media strategies that build your brand, engage your audience, and drive meaningful results across all major platforms.',
    includes: [
      'Social Media Strategy',
      'Content Creation',
      'Community Management',
      'Influencer Partnerships',
      'Social Ads Management',
      'Analytics & Reporting',
    ],
    process: ['Research', 'Plan', 'Create', 'Publish', 'Analyze'],
  },
  {
    id: 'performance',
    icon: '🎯',
    title: 'Performance Marketing',
    shortDesc: 'Maximize ROI with targeted paid advertising.',
    description: 'Our performance marketing experts design and manage paid advertising campaigns across Google, Meta, LinkedIn, and more to maximize your return on ad spend.',
    includes: [
      'Google Ads Management',
      'Meta Ads (Facebook & Instagram)',
      'LinkedIn Advertising',
      'Retargeting Campaigns',
      'Landing Page Optimization',
      'Conversion Tracking',
    ],
    process: ['Audit', 'Setup', 'Launch', 'Test', 'Scale'],
  },
  {
    id: 'content',
    icon: '✍️',
    title: 'Content Marketing',
    shortDesc: 'Create compelling content that converts.',
    description: 'We develop content strategies and create high-quality content that educates, engages, and guides your audience through the buyer\'s journey.',
    includes: [
      'Content Strategy',
      'Blog Writing',
      'Video Production',
      'Infographics',
      'Whitepapers & eBooks',
      'Content Distribution',
    ],
    process: ['Plan', 'Create', 'Optimize', 'Distribute', 'Measure'],
  },
  {
    id: 'email',
    icon: '📧',
    title: 'Email Marketing Automation',
    shortDesc: 'Nurture leads with personalized email sequences.',
    description: 'We design and implement email marketing automation that nurtures leads, drives engagement, and increases customer lifetime value.',
    includes: [
      'Email Strategy',
      'Automation Workflows',
      'Template Design',
      'A/B Testing',
      'List Segmentation',
      'Performance Analytics',
    ],
    process: ['Audit', 'Design', 'Build', 'Test', 'Launch'],
  },
  {
    id: 'web',
    icon: '🎨',
    title: 'Web Design & Optimization',
    shortDesc: 'Convert visitors with stunning websites.',
    description: 'We design and optimize websites and landing pages that look great, load fast, and convert visitors into customers.',
    includes: [
      'Website Design',
      'Landing Page Creation',
      'UX/UI Optimization',
      'Speed Optimization',
      'Mobile Responsiveness',
      'Conversion Rate Optimization',
    ],
    process: ['Discover', 'Design', 'Develop', 'Test', 'Launch'],
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Analytics & Tracking',
    shortDesc: 'Make data-driven decisions with proper tracking.',
    description: 'We set up comprehensive analytics and tracking systems so you can understand your audience, measure performance, and make informed decisions.',
    includes: [
      'Google Analytics 4 Setup',
      'Tag Manager Implementation',
      'Conversion Tracking',
      'Custom Dashboards',
      'Attribution Modeling',
      'Regular Reporting',
    ],
    process: ['Audit', 'Plan', 'Implement', 'Validate', 'Report'],
  },
  {
    id: 'brand',
    icon: '💼',
    title: 'Brand Strategy & Consultation',
    shortDesc: 'Define your brand and market positioning.',
    description: 'We help you define your brand identity, positioning, and messaging to stand out in a crowded market and connect with your target audience.',
    includes: [
      'Brand Audit',
      'Competitive Analysis',
      'Brand Positioning',
      'Messaging Framework',
      'Visual Identity Guidelines',
      'Go-to-Market Strategy',
    ],
    process: ['Discovery', 'Research', 'Define', 'Document', 'Implement'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#111111]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-medium tracking-wider uppercase mb-4">Our Services</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Digital Marketing <span className="gradient-text">Solutions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive services tailored to your business goals. From SEO to paid ads, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="glass-card p-8 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">What's Included:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3">Our Process:</h3>
                  <div className="flex items-center gap-2 overflow-x-auto pb-2">
                    {service.process.map((step, i) => (
                      <div key={i} className="flex items-center">
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full whitespace-nowrap">
                          {i + 1}. {step}
                        </span>
                        {i < service.process.length - 1 && (
                          <svg className="w-4 h-4 text-gray-600 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium tracking-wider uppercase mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to see results?',
                a: 'SEO typically takes 3-6 months to show significant results, while paid advertising can generate leads within days. We set realistic expectations based on your specific situation.',
              },
              {
                q: 'Do you offer custom packages?',
                a: 'Absolutely! We understand every business is unique. We\'ll work with you to create a customized solution that fits your needs and budget.',
              },
              {
                q: 'What industries do you work with?',
                a: 'We work with businesses across various industries including e-commerce, SaaS, healthcare, finance, and professional services. Our strategies are tailored to your specific market.',
              },
              {
                q: 'How do you measure success?',
                a: 'We establish clear KPIs at the start of each engagement and provide transparent reporting on metrics that matter to your business, whether that\'s traffic, leads, sales, or ROI.',
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss which services are right for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
