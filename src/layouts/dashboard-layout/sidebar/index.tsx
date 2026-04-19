import SvgBox from '@/components/ui/svg-box'
import { Backdrop, ButtonBase, useMediaQuery } from '@mui/material'
import { Link, useLocation } from 'react-router'
import { StyledArrow, StyledBox, StyledSidebar } from './styled'
import Image from '@/components/ui/image'
import { useEffect } from 'react'
import data from './data'
import useSettingsStore from '@/stores/useSettingsStore'

export default function Sidebar() {
  const { pathname } = useLocation()
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))
  const sidebar = useSettingsStore((state) => state.sidebar)
  const toggleSidebar = useSettingsStore((state) => state.toggleSidebar)

  useEffect(() => {
    if (isMobile && sidebar) toggleSidebar()
  }, [isMobile])

  return (
    <>
      <StyledBox sidebar={sidebar}>
        <StyledSidebar sidebar={sidebar}>
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
                <Link
                  to={`/dashboard/${path}`}
                  data-active={`/dashboard/${path}` === pathname}
                >
                  <span>
                    <SvgBox src={`/icons/${icon}.svg`} />
                  </span>
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <StyledArrow sidebar={sidebar} onClick={() => toggleSidebar()}>
            <SvgBox src="/icons/arrow-down.svg" />
          </StyledArrow>
        </StyledSidebar>
      </StyledBox>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer - 1 }}
        open={isMobile && sidebar}
        onClick={() => toggleSidebar()}
      />
    </>
  )
}
