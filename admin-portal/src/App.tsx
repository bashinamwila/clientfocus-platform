import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Generations from './pages/Generations'
import Revenue from './pages/Revenue'
import ApiUsage from './pages/ApiUsage'
import AuditLogs from './pages/AuditLogs'
import CmsOverview from './pages/cms/CmsOverview'
import BlogPosts from './pages/cms/BlogPosts'
import BlogEditor from './pages/cms/BlogEditor'
import ResourcesList from './pages/cms/ResourcesList'
import ResourceEditor from './pages/cms/ResourceEditor'
import ServicesList from './pages/cms/ServicesList'
import ServiceEditor from './pages/cms/ServiceEditor'
import ApprovalQueue from './pages/cms/ApprovalQueue'
import { useAuth } from './auth/useAuth'
import { setTokenProvider } from './api/client'

const App = () => {
  const { initAuth, getAccessToken } = useAuth()

  useEffect(() => {
    initAuth()
    setTokenProvider(getAccessToken)
  }, [initAuth, getAccessToken])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="generations" element={<Generations />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="api-usage" element={<ApiUsage />} />
          <Route path="audit-logs" element={<AuditLogs />} />
          <Route path="cms" element={<CmsOverview />} />
          <Route path="cms/blog" element={<BlogPosts />} />
          <Route path="cms/blog/edit/:id" element={<BlogEditor />} />
          <Route path="cms/blog/new" element={<BlogEditor />} />
          <Route path="cms/resources" element={<ResourcesList />} />
          <Route path="cms/resources/edit/:id" element={<ResourceEditor />} />
          <Route path="cms/services" element={<ServicesList />} />
          <Route path="cms/services/edit/:id" element={<ServiceEditor />} />
          <Route path="cms/approvals" element={<ApprovalQueue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
