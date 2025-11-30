import { Link } from 'react-router-dom'

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: '15+ years in digital marketing. Former Google and HubSpot.',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of SEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    bio: 'SEO expert with 10+ years experience. Drove $50M+ in organic revenue.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Paid Media',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Managed $20M+ in ad spend. Specialist in B2B and e-commerce.',
  },
  {
    name: 'Emily Watson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    bio: 'Award-winning designer. Led creative for Fortune 500 brands.',
  },
]

const values = [
  {
    icon: '🎯',
    title: 'Results-Driven',
    description: 'We measure success by your success. Every strategy is designed to deliver measurable ROI.',
  },
  {
    icon: '🤝',
    title: 'Partnership',
    description: 'We\'re not just vendors — we\'re your growth partners invested in your long-term success.',
  },
  {
    icon: '📊',
    title: 'Data-Informed',
    description: 'Every decision is backed by data. We test, measure, learn, and optimize continuously.',
  },
  {
    icon: '🔍',
    title: 'Transparency',
    description: 'Clear communication, honest reporting, and no hidden agendas. You always know what\'s happening.',
  },
]

const timeline = [
  { year: '2014', title: 'Founded', description: 'Started with a vision to help businesses grow digitally.' },
  { year: '2016', title: 'First 50 Clients', description: 'Reached our first milestone of 50 active clients.' },
  { year: '2018', title: 'Team of 20', description: 'Expanded our team to serve growing client needs.' },
  { year: '2020', title: '100+ Clients', description: 'Crossed 100 clients across multiple industries.' },
  { year: '2022', title: 'Award-Winning', description: 'Recognized as a top digital marketing agency.' },
  { year: '2024', title: '150+ Clients', description: 'Serving 150+ clients with a team of 35+ experts.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#111111]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-medium tracking-wider uppercase mb-4">About Us</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            We're <span className="gradient-text">Growth Partners</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A team of digital marketing experts passionate about helping businesses achieve their full potential online.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-400 font-medium tracking-wider uppercase mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                From Startup to Leading Agency
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  Founded in 2014, we started with a simple mission: help businesses navigate the complex world of digital marketing and achieve real, measurable results.
                </p>
                <p>
                  What began as a small team of passionate marketers has grown into a full-service digital marketing agency serving 150+ clients across industries including e-commerce, SaaS, healthcare, finance, and professional services.
                </p>
                <p>
                  Our success comes from our commitment to treating every client's business as if it were our own. We don't just run campaigns — we build long-term partnerships focused on sustainable growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-8 -left-8 glass-card p-6 hidden lg:block">
                <p className="text-3xl font-bold gradient-text">10+</p>
                <p className="text-gray-400">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400">
                To empower businesses with data-driven digital marketing strategies that deliver measurable results and sustainable growth. We believe every business deserves access to expert marketing that moves the needle.
              </p>
            </div>
            <div className="glass-card p-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400">
                To be the most trusted digital marketing partner for growing businesses, known for our integrity, innovation, and relentless focus on client success. We aim to set the standard for what a marketing agency should be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium tracking-wider uppercase mb-3">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Stand For
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium tracking-wider uppercase mb-3">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              A Decade of Growth
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-500/30" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-8">
                  <div className="w-16 flex-shrink-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500" />
                  </div>
                  <div className="glass-card p-6 flex-1">
                    <span className="text-blue-400 font-semibold">{item.year}</span>
                    <h3 className="text-xl font-semibold text-white mt-1">{item.title}</h3>
                    <p className="text-gray-400 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium tracking-wider uppercase mb-3">Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet the Experts
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A team of seasoned professionals dedicated to your success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="glass-card p-6 text-center group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help grow your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
