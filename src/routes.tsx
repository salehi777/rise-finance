import { BrowserRouter, Route, Routes } from 'react-router'
import ProgressBar from './components/ui/progress-bar'

import LandingLayout from './layouts/landing-layout'
import AuthLayout from './layouts/auth-layout'
import DashboardLayout from './layouts/dashboard-layout'

import HomePage from './pages/home'
import LoginPage from './pages/login'
import SignupPage from './pages/signup'
import LandingNotFoundPage from './pages/landing-not-found'

import DashboardPage from './pages/dashboard'
import DashboardNotFoundPage from './pages/dashboard-not-found'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ProgressBar />
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
          <Route path="*" element={<LandingNotFoundPage />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="" element={<DashboardPage />} />
          <Route path="*" element={<DashboardNotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
