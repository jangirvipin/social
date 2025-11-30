import { useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses just getting started.',
    monthlyPrice: 999,
    yearlyPrice: 799,
    features: [
      'SEO Audit & Strategy',
      'Social Media Management (2 platforms)',
      'Monthly Blog Content (2 posts)',
      'Basic Analytics Reporting',
      'Email Support',
      'Monthly Strategy Call',
    ],
    notIncluded: ['Paid Ads Management', 'Video Content', 'Dedicated Account Manager'],
    popular: false,
  },
  {
    name: 'Growth',
    description: 'For businesses ready to scale their marketing.',
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    features: [
      'Everything in Starter',
      'SEO Implementation',
      'Social Media Management (4 platforms)',
      'Monthly Blog Content (4 posts)',
      'Google Ads Management',
      'Meta Ads Management',
      'Landing Page Optimization',
      'Advanced Analytics & Dashboards',
      'Bi-Weekly Strategy Calls',
      'Dedicated Account Manager',
    ],
    notIncluded: ['Video Production'],
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Full-service solution for established businesses.',
    monthlyPrice: 4999,
    yearlyPrice: 3999,
    features: [
      'Everything in Growth',
      'Full SEO Management',
      'All Social Platforms',
      'Unlimited Content Creation',
      'Video Production (2/month)',
      'Email Marketing Automation',
      'Conversion Rate Optimization',
      'Custom Integrations',
      'Weekly Strategy Calls',
      'Priority Support (24/7)',
      'Quarterly Business Reviews',
    ],
    notIncluded: [],
    popular: false,
  },
]

const comparisonFeatures = [
  { name: 'SEO', starter: 'Basic', growth: 'Advanced', enterprise: 'Full' },
  { name: 'Social Media Platforms', starter: '2', growth: '4', enterprise: 'Unlimited' },
  { name: 'Blog Posts/Month', starter: '2', growth: '4', enterprise: 'Unlimited' },
  { name: 'Paid Ads', starter: '❌', growth: '✓', enterprise: '✓' },
  { name: 'Video Content', starter: '❌', growth: '❌', enterprise: '2/month' },
  { name: 'Account Manager', starter: '❌', growth: '✓', enterprise: 'Dedicated' },
  { name: 'Strategy Calls', starter: 'Monthly', growth: 'Bi-Weekly', enterprise: 'Weekly' },
  { name: 'Support', starter: 'Email', growth: 'Email & Chat', enterprise: '24/7 Priority' },
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#111111]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-medium tracking-wider uppercase mb-4">Pricing</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Choose the plan that fits your business. No hidden fees. Cancel anytime.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isYearly ? 'bg-blue-500' : 'bg-gray-600'}`}
            >
              <span
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-8' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-green-400">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative glass-card p-8 ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/50' : ''}`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-400">/month</span>
                  {isYearly && (
                    <p className="text-sm text-green-400 mt-1">
                      Billed annually (${plan.yearlyPrice * 12}/year)
                    </p>
                  )}
                </div>
                
                <Link
                  to="/contact"
                  className={`block w-full py-3 text-center font-semibold rounded-xl transition-all duration-300 mb-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-500">
                      <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Plan Comparison
            </h2>
            <p className="text-gray-400">
              See what's included in each plan at a glance.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 text-blue-400 font-semibold">Growth</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-4 px-4 text-gray-300">{feature.name}</td>
                    <td className="py-4 px-4 text-center text-gray-400">{feature.starter}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{feature.growth}</td>
                    <td className="py-4 px-4 text-center text-gray-300">{feature.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-medium tracking-wider uppercase mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pricing Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                q: 'Can I switch plans later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
              },
              {
                q: 'Is there a setup fee?',
                a: 'No, there are no setup fees. You only pay the monthly or annual subscription fee.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, ACH bank transfers, and can arrange invoicing for Enterprise plans.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 30-day money-back guarantee for new customers. If you\'re not satisfied, we\'ll refund your payment.',
              },
              {
                q: 'Can I customize my plan?',
                a: 'Absolutely! Contact us to discuss your specific needs and we\'ll create a custom package that fits your budget and goals.',
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
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free consultation and we'll help you find the right plan.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 shadow-lg"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </>
  )
}
