import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CmsSubNav from '../../components/CmsSubNav'

type ViewMode = 'editor' | 'preview' | 'split'

const toolbarButtons = [
  { label: 'B', style: 'font-bold' },
  { label: 'I', style: 'italic' },
  { label: 'U', style: 'underline' },
  { label: 'H1', style: 'text-xs' },
  { label: 'H2', style: 'text-xs' },
  { label: 'UL', style: 'text-xs' },
  { label: 'OL', style: 'text-xs' },
]

const inputClass =
  'w-full bg-[#0F172A] border border-slate-600 rounded-lg px-4 py-2.5 text-sm text-white focus:ring-2 focus:ring-cyan-500 focus:outline-none'

const BlogEditor = () => {
  const [activeView, setActiveView] = useState<ViewMode>('split')
  const [title, setTitle] = useState('AI in Modern Accounting')
  const [slug, setSlug] = useState('ai-in-modern-accounting')
  const [category, setCategory] = useState('Technology')
  const [author, setAuthor] = useState('Sarah Chen')
  const [body, setBody] = useState(
    'Artificial intelligence is transforming the accounting profession. From automated data entry to intelligent reconciliation, AI tools are helping accountants focus on higher-value advisory work.\n\nIn this article, we explore the key trends shaping AI adoption in accounting firms of all sizes.'
  )

  const views: { key: ViewMode; label: string }[] = [
    { key: 'editor', label: 'Editor' },
    { key: 'split', label: 'Split' },
    { key: 'preview', label: 'Preview' },
  ]

  return (
    <div className="min-h-screen bg-[#0F172A] p-8">
      <Link to="/cms/blog" className="text-[#4A90C4] text-sm hover:underline mb-4 inline-block">
        &larr; Back to Blog Posts
      </Link>
      <PageHeader title="Edit Blog Post" subtitle="Modify content and submit for approval" />
      <CmsSubNav />

      {/* View toggle */}
      <div className="flex gap-1 mb-6 bg-[#1E293B] p-1 rounded-lg w-fit">
        {views.map((v) => (
          <button
            key={v.key}
            onClick={() => setActiveView(v.key)}
            className={`px-4 py-2 text-sm rounded-md transition-colors ${
              activeView === v.key
                ? 'bg-[#4A90C4] text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <div className={`grid gap-6 ${activeView === 'split' ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {/* Editor panel */}
        {activeView !== 'preview' && (
          <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-6 space-y-5">
            <div>
              <label className="block text-gray-400 text-sm mb-1.5">Title</label>
              <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-1.5">Slug</label>
              <div className="flex items-center">
                <span className="text-gray-500 text-sm mr-2">clientfocus.co.za/blog/</span>
                <input className={inputClass} value={slug} onChange={(e) => setSlug(e.target.value)} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Category</label>
                <select className={inputClass} value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option>Technology</option>
                  <option>Tax</option>
                  <option>Business</option>
                  <option>Compliance</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Author</label>
                <input className={inputClass} value={author} onChange={(e) => setAuthor(e.target.value)} />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-1.5">Featured Image</label>
              <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center text-gray-500 text-sm">
                Drag &amp; drop an image or click to upload
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-1.5">Content</label>
              <div className="border border-slate-600 rounded-lg overflow-hidden">
                <div className="flex gap-1 bg-slate-800/50 px-3 py-2 border-b border-slate-600">
                  {toolbarButtons.map((btn) => (
                    <div
                      key={btn.label}
                      className={`px-2.5 py-1 text-sm text-gray-400 bg-slate-700/50 rounded cursor-pointer hover:bg-slate-600 hover:text-white ${btn.style}`}
                    >
                      {btn.label}
                    </div>
                  ))}
                </div>
                <div
                  className="p-4 min-h-[200px] text-sm text-white focus:outline-none"
                  contentEditable
                  suppressContentEditableWarning
                  onInput={(e) => setBody(e.currentTarget.textContent || '')}
                >
                  {body}
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button className="bg-slate-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-500 transition-colors">
                Save Draft
              </button>
              <button className="bg-[#4A90C4] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3a7db0] transition-colors">
                Submit for Approval
              </button>
            </div>
          </div>
        )}

        {/* Preview panel */}
        {activeView !== 'editor' && (
          <div className="bg-[#1E293B] border border-slate-700 rounded-xl p-6">
            {/* Browser mockup */}
            <div className="bg-slate-800 rounded-t-lg px-4 py-3 flex items-center gap-2 mb-0">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-500 text-xs ml-2">clientfocus.co.za/blog/{slug}</span>
            </div>
            <div className="bg-[#0F172A] rounded-b-lg p-8">
              <h1 className="text-white text-2xl font-bold mb-2">{title}</h1>
              <p className="text-gray-500 text-sm mb-6">
                By {author} &middot; April 11, 2026
              </p>
              {body.split('\n').filter(Boolean).map((para, i) => (
                <p key={i} className="text-gray-300 text-sm leading-relaxed mb-4">{para}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogEditor
