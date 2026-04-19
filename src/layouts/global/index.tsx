import { StyledLayout } from './styles'
import Header from './header'
import Sidebar from './sidebar'
import { Outlet } from 'react-router'

export default function GlobalLayout() {
  return (
    <StyledLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <Sidebar />
    </StyledLayout>
  )
}
