import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AuthLayout = () => (
  <>
    <Header />
    <main className="pt-16 min-h-screen bg-brand-bg">
      <Outlet />
    </main>
  </>
)

export default AuthLayout
