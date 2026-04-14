import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MarketingLayout from './layouts/MarketingLayout'
import AuthLayout from './layouts/AuthLayout'
import Landing from './pages/Landing'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import EmailConfirmationSent from './pages/EmailConfirmationSent'
import EmailConfirmed from './pages/EmailConfirmed'
import AcceptInvite from './pages/AcceptInvite'
import Pricing from './pages/Pricing'
import Download from './pages/Download'
import AccountingFirms from './pages/AccountingFirms'
import Freelancers from './pages/Freelancers'
import SmallBusinesses from './pages/SmallBusinesses'
import About from './pages/company/About'
import Contact from './pages/company/Contact'
import Privacy from './pages/company/Privacy'
import Terms from './pages/company/Terms'
import Careers from './pages/company/Careers'
import FinancialStatements from './pages/services/FinancialStatements'
import BookkeepingAutomation from './pages/services/BookkeepingAutomation'
import TaxCompliance from './pages/services/TaxCompliance'
import AuditSupport from './pages/services/AuditSupport'
import BusinessAdvisory from './pages/services/BusinessAdvisory'
import Blog from './pages/resources/Blog'
import GettingStarted from './pages/resources/GettingStarted'
import IfrsComplianceChecklist from './pages/resources/IfrsComplianceChecklist'
import SmallBusinessTaxGuide from './pages/resources/SmallBusinessTaxGuide'
import FreelancerFinanceToolkit from './pages/resources/FreelancerFinanceToolkit'
import TenantOnboarding from './pages/onboarding/TenantOnboarding'
import InternalOnboarding from './pages/onboarding/InternalOnboarding'
import ProtectedRoute from './components/ProtectedRoute'
import { useAuth } from './auth/useAuth'
import { setTokenProvider } from './api/client'

const App = () => {
  const { initAuth, getAccessToken } = useAuth()

  useEffect(() => {
    initAuth()
    setTokenProvider(getAccessToken)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
  <BrowserRouter>
    <Routes>
      {/* Marketing pages */}
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/accounting-firms" element={<AccountingFirms />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/small-businesses" element={<SmallBusinesses />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/download" element={<Download />} />

        {/* Services */}
        <Route path="/services/financial-statement-preparation" element={<FinancialStatements />} />
        <Route path="/services/bookkeeping-automation" element={<BookkeepingAutomation />} />
        <Route path="/services/tax-compliance" element={<TaxCompliance />} />
        <Route path="/services/audit-support" element={<AuditSupport />} />
        <Route path="/services/business-advisory" element={<BusinessAdvisory />} />

        {/* Resources */}
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/getting-started" element={<GettingStarted />} />
        <Route path="/resources/ifrs-compliance-checklist" element={<IfrsComplianceChecklist />} />
        <Route path="/resources/small-business-tax-guide" element={<SmallBusinessTaxGuide />} />
        <Route path="/resources/freelancer-finance-toolkit" element={<FreelancerFinanceToolkit />} />

        {/* Company */}
        <Route path="/company/about" element={<About />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/company/privacy" element={<Privacy />} />
        <Route path="/company/terms" element={<Terms />} />
      </Route>

      {/* Auth pages */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/email-confirmation-sent" element={<EmailConfirmationSent />} />
        <Route path="/email-confirmed" element={<EmailConfirmed />} />
        <Route path="/accept-invite" element={<AcceptInvite />} />
      </Route>

      {/* Protected pages */}
      <Route element={<AuthLayout />}>
        <Route path="/onboarding" element={<ProtectedRoute><TenantOnboarding /></ProtectedRoute>} />
        <Route path="/internal-onboarding" element={<ProtectedRoute><InternalOnboarding /></ProtectedRoute>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
