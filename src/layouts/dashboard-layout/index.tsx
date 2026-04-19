import useAuthStore from '@/stores/useAuthStore'
import Header from './header'
import Sidebar from './sidebar'
import { StyledLayout } from './styled'
import { Outlet, useNavigate } from 'react-router'
import { useEffect } from 'react'

export default function DashboardLayout() {
  const user = useAuthStore((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/')
  }, [user])

  return (
    user && (
      <StyledLayout>
        <Sidebar />
        <Header />
        <main>
          <Outlet />
        </main>
      </StyledLayout>
    )
  )
}
