import Footer from './footer'
import Header from './header'
import { StyledLayout } from './styled'
import { Outlet, useLocation } from 'react-router'

export default function LandingLayout() {
  const { pathname } = useLocation()

  return (
    <StyledLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      {!['/login', '/signup'].includes(pathname) && <Footer />}
    </StyledLayout>
  )
}
