import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CmsSubNav from '../../components/CmsSubNav'

interface FeatureCard {
  title: string
  description: string
}

const inputClass =
  'w-full bg-[#0F172A] border border-slate-600 rounded-lg px-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none'

const ServiceEditor = () => {
  const [serviceTitle, setServiceTitle] = useState('Bookkeeping Services')
  const [heroSubtitle, setHeroSubtitle] = useState('Accurate, timely bookkeeping so you can focus on growing your business')
  const [introText, setIntroText] = useState(
    'Our bookkeeping services ensure your financial records are always up to date and compliant with South African regulations. We handle everything from daily transaction recording to monthly reconciliations.'
  )
  const [features, setFeatures] = useState<FeatureCard[]>([
    { title: 'Daily Transaction Recording', description: 'We capture every invoice, receipt, and payment into your accounting system daily.' },
    { title: 'Bank Reconciliations', description: 'Monthly reconciliation of all bank accounts to ensure accuracy and catch discrepancies.' },
    { title: 'VAT Returns', description: 'Preparation and submission of VAT201 returns on time, every time.' },
    { title: 'Management Reports', description: 'Monthly management packs including P&L, Balance Sheet, and cash flow summaries.' },
  ])
  const [ctaHeading, setCtaHeading] = useState('Ready to streamline your bookkeeping?')
  const [ctaSubtitle, setCtaSubtitle] = useState('Get in touch for a free consultation and quote.')

  const updateFeature = (index: number, field: 'title' | 'description', value: string) => {
    const updated = [...features]
    updated[index] = { ...updated[index], [field]: value }
    setFeatures(updated)
  }

  return (
    <div className="min-h-screen bg-[#0F172A] p-8">
      <Link to="/cms/services" className="text-[#4A90C4] text-sm hover:underline mb-4 inline-block">
        &larr; Back to Services
      </Link>
      <PageHeader title="Edit Service" subtitle="Update service page content" />
      <CmsSubNav />

      <div className="max-w-3xl space-y-6">
        <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-gray-400 text-sm mb-1.5">Service Title</label>
            <input className={inputClass} value={serviceTitle} onChange={(e) => setServiceTitle(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1.5">Hero Subtitle</label>
            <input className={inputClass} value={heroSubtitle} onChange={(e) => setHeroSubtitle(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1.5">Intro Text</label>
            <textarea
              className={`${inputClass} resize-y`}
              rows={4}
              value={introText}
              onChange={(e) => setIntroText(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Feature Cards</h3>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="bg-[#1E293B] border border-slate-700 rounded-xl p-5 space-y-3">
                <div>
                  <label className="block text-gray-400 text-xs mb-1">Title</label>
                  <input
                    className={inputClass}
                    value={feature.title}
                    onChange={(e) => updateFeature(i, 'title', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1">Description</label>
                  <textarea
                    className={`${inputClass} resize-y`}
                    rows={3}
                    value={feature.description}
                    onChange={(e) => updateFeature(i, 'description', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-gray-400 text-sm mb-1.5">CTA Heading</label>
            <input className={inputClass} value={ctaHeading} onChange={(e) => setCtaHeading(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1.5">CTA Subtitle</label>
            <input className={inputClass} value={ctaSubtitle} onChange={(e) => setCtaSubtitle(e.target.value)} />
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button className="bg-slate-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-500 transition-colors">
            Preview
          </button>
          <button className="bg-[#4A90C4] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3a7db0] transition-colors">
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceEditor
