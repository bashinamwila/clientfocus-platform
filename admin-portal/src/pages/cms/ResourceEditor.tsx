import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CmsSubNav from '../../components/CmsSubNav'

interface Section {
  id: number
  title: string
  content: string
}

const inputClass =
  'w-full bg-[#0F172A] border border-slate-600 rounded-lg px-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none'

const ResourceEditor = () => {
  const [pageTitle, setPageTitle] = useState('Getting Started Guide')
  const [subtitle, setSubtitle] = useState('Everything you need to know to get up and running')
  const [sections, setSections] = useState<Section[]>([
    { id: 1, title: 'Creating Your Account', content: 'Follow these steps to create your account and set up your profile with Client Focus Solutions.' },
    { id: 2, title: 'Uploading Documents', content: 'You can upload invoices, receipts, and bank statements through the secure document portal.' },
    { id: 3, title: 'Viewing Reports', content: 'Once your documents have been processed, you can view your financial reports in the dashboard.' },
  ])

  const addSection = () => {
    setSections([...sections, { id: Date.now(), title: '', content: '' }])
  }

  const updateSection = (id: number, field: 'title' | 'content', value: string) => {
    setSections(sections.map((s) => (s.id === id ? { ...s, [field]: value } : s)))
  }

  const deleteSection = (id: number) => {
    setSections(sections.filter((s) => s.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#0F172A] p-8">
      <Link to="/cms/resources" className="text-[#4A90C4] text-sm hover:underline mb-4 inline-block">
        &larr; Back to Resources
      </Link>
      <PageHeader title="Edit Resource" subtitle="Update resource article content" />
      <CmsSubNav />

      <div className="max-w-3xl space-y-6">
        <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-gray-400 text-sm mb-1.5">Page Title</label>
            <input className={inputClass} value={pageTitle} onChange={(e) => setPageTitle(e.target.value)} />
          </div>
          <div>
            <label className="block text-gray-400 text-sm mb-1.5">Hero Subtitle</label>
            <input className={inputClass} value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Content Sections</h3>
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="bg-[#1E293B] border border-slate-700 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 cursor-grab text-lg" title="Drag to reorder">&#x2630;</span>
                  <input
                    className={inputClass}
                    placeholder="Section title"
                    value={section.title}
                    onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                  />
                  <button
                    onClick={() => deleteSection(section.id)}
                    className="text-red-400 hover:text-red-300 text-sm shrink-0"
                  >
                    Delete
                  </button>
                </div>
                <textarea
                  className={`${inputClass} resize-y`}
                  rows={3}
                  placeholder="Section content..."
                  value={section.content}
                  onChange={(e) => updateSection(section.id, 'content', e.target.value)}
                />
              </div>
            ))}
          </div>

          <button
            onClick={addSection}
            className="w-full mt-4 border-2 border-dashed border-slate-600 rounded-xl py-4 text-gray-400 text-sm hover:border-[#4A90C4] hover:text-[#4A90C4] transition-colors"
          >
            + Add Section
          </button>
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

export default ResourceEditor
