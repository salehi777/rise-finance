import { useRef, useState } from 'react'
import useWindowResize from '@/hooks/useWindowResize'
import NavItem from './nav-item'
import data from './data'
import { StyledNavbar } from './styled'
import { Link, useLocation } from 'react-router'

export default function Navbar() {
  const [dockHovered, setDockHovered] = useState(false)
  const [dockWidth, setDockWidth] = useState(0)
  const dockRef = useRef<HTMLUListElement>(null!)
  const { pathname } = useLocation()

  useWindowResize(() => {
    setDockWidth(dockRef.current.clientWidth)
  })

  return (
    <StyledNavbar>
      <ul
        ref={dockRef}
        onMouseOver={() => setDockHovered(true)}
        onMouseOut={() => setDockHovered(false)}
      >
        {data.map((item) => (
          <li key={item.label}>
            <Link to={item.path} data-active={item.path === pathname}>
              <NavItem dockHovered={dockHovered} dockWidth={dockWidth}>
                <span>{item.label}</span>
              </NavItem>
            </Link>
          </li>
        ))}
      </ul>
    </StyledNavbar>
  )
}
