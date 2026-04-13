import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import StatusBadge from '../../components/StatusBadge'
import CmsSubNav from '../../components/CmsSubNav'

const posts = [
  { id: 1, title: 'AI in Modern Accounting', status: 'Published' as const, approval: 'Approved' as const, author: 'Sarah Chen', created: '2026-04-01' },
  { id: 2, title: 'Tax Planning for SMEs', status: 'Published' as const, approval: 'Approved' as const, author: 'Liam O\'Brien', created: '2026-03-22' },
  { id: 3, title: 'Cloud Accounting Benefits', status: 'Draft' as const, approval: 'Pending' as const, author: 'Sarah Chen', created: '2026-04-08' },
  { id: 4, title: 'Year-End Checklist 2026', status: 'Draft' as const, approval: 'Pending' as const, author: 'James Mwangi', created: '2026-04-10' },
]

const BlogPosts = () => (
  <div className="min-h-screen bg-[#0F172A] p-8">
    <PageHeader
      title="Blog Posts"
      subtitle="Manage blog content"
      action={
        <Link
          to="/cms/blog/new"
          className="bg-[#4A90C4] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3a7db0] transition-colors"
        >
          + New Post
        </Link>
      }
    />
    <CmsSubNav />

    <div className="bg-[#1E293B] border border-slate-700 rounded-xl">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-800/50 text-gray-400 text-left">
            <th className="px-6 py-3 font-medium">Title</th>
            <th className="px-6 py-3 font-medium">Status</th>
            <th className="px-6 py-3 font-medium">Approval</th>
            <th className="px-6 py-3 font-medium">Author</th>
            <th className="px-6 py-3 font-medium">Created</th>
            <th className="px-6 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b border-slate-700 hover:bg-slate-800/30">
              <td className="px-6 py-4 text-white font-medium">{post.title}</td>
              <td className="px-6 py-4">
                <StatusBadge
                  label={post.status}
                  variant={post.status === 'Published' ? 'green' : 'amber'}
                />
              </td>
              <td className="px-6 py-4">
                <StatusBadge
                  label={post.approval}
                  variant={post.approval === 'Approved' ? 'green' : 'amber'}
                />
              </td>
              <td className="px-6 py-4 text-gray-400">{post.author}</td>
              <td className="px-6 py-4 text-gray-400">{post.created}</td>
              <td className="px-6 py-4 flex items-center gap-3">
                <Link to={`/cms/blog/edit/${post.id}`} className="text-[#4A90C4] hover:underline">
                  Edit
                </Link>
                <button className="text-red-400 hover:text-red-300">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

export default BlogPosts
