import { Backdrop, ButtonBase, useMediaQuery } from '@mui/material'
import { StyledToggle, StyledContent, StyledSidebar } from './styles'
import useSettingsStore from '@/stores/useSettingsStore'
import { useEffect } from 'react'
import SvgBox from '@/components/ui/svg-box'
import { Link, NavLink } from 'react-router'
import Image from '@/components/ui/image'
import data from './data'

export default function Sidebar() {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const sidebar = useSettingsStore((s) => s.sidebar)
  const toggleSidebar = useSettingsStore((s) => s.toggleSidebar)

  useEffect(() => {
    if (!isDesktop && sidebar) toggleSidebar()
  }, [isDesktop])

  return (
    <>
      <Backdrop
        open={sidebar && !isDesktop}
        onClick={() => toggleSidebar()}
        sx={{ zIndex: (theme) => theme.zIndex.appBar + 1 }}
      />
      <StyledSidebar data-open={sidebar}>
        <div>
          <StyledToggle data-open={sidebar} onClick={() => toggleSidebar()}>
            <SvgBox src="/icons/arrow-down.svg" />
          </StyledToggle>
          <StyledContent data-open={sidebar}>
            <Link to="/">
              <div>
                <Image src="/images/logo.png" alt="RiseFinance" />
              </div>
              <span>RiseFinance</span>
            </Link>

            <ButtonBase component={Link} to="/dashboard/add-project">
              <div>
                <SvgBox src="/icons/plus.svg" />
              </div>
              <span>Create new project</span>
            </ButtonBase>

            <ul>
              {data.map(({ label, path, icon }) => (
                <li key={path}>
                  <NavLink to={`/dashboard${path}`} end>
                    <SvgBox src={`/icons/${icon}.svg`} />
                    <span>{label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </StyledContent>
        </div>
      </StyledSidebar>
    </>
  )
}
