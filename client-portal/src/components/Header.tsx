import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  // Reset any GSAP inline styles on route change so the nav is always visible
  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.opacity = ''
      navRef.current.style.transform = ''
    }
  }, [location.pathname])

  return (
    <nav ref={navRef} className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/">
          <img src="/images/fs-logo.png" alt="Financials Studio" className="h-10 w-10 flex-shrink-0" />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/accounting-firms" className="text-sm font-medium text-gray-600 hover:text-brand-navy transition-colors">Accounting Firms</Link>
          <Link to="/freelancers" className="text-sm font-medium text-gray-600 hover:text-brand-navy transition-colors">Freelancers</Link>
          <Link to="/small-businesses" className="text-sm font-medium text-gray-600 hover:text-brand-navy transition-colors">Small Businesses</Link>
          <Link to="/pricing" className="text-sm font-medium text-gray-600 hover:text-brand-navy transition-colors">Pricing</Link>
          <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-brand-navy transition-colors">Login</Link>
          <Link to="/create-account" className="bg-brand-navy text-white px-5 py-2 rounded text-sm font-semibold hover:bg-brand-blue transition-colors">Create Account</Link>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-gray-600 hover:text-brand-navy" aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 space-y-3">
            <Link to="/accounting-firms" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-600 hover:text-brand-navy">Accounting Firms</Link>
            <Link to="/freelancers" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-600 hover:text-brand-navy">Freelancers</Link>
            <Link to="/small-businesses" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-600 hover:text-brand-navy">Small Businesses</Link>
            <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-600 hover:text-brand-navy">Pricing</Link>
            <Link to="/login" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-600 hover:text-brand-navy">Login</Link>
            <Link to="/create-account" onClick={() => setMobileOpen(false)} className="block bg-brand-navy text-white px-4 py-2 rounded text-sm font-semibold text-center">Create Account</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
