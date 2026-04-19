import ButtonGroup from '@/components/ui/button-group'
import { StyledLayout, StyledButtons } from './styled'
import { ButtonBase } from '@mui/material'
import { Link, Outlet, useLocation } from 'react-router'
import { useEffect, useState } from 'react'

export default function AuthLayout() {
  const { pathname } = useLocation()
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    if (pathname.includes('login')) setActiveIndex(0)
    else setActiveIndex(1)
  }, [pathname])

  return (
    <StyledLayout>
      <StyledButtons>
        <div>
          <ButtonGroup
            activeIndex={activeIndex}
            items={[
              {
                children: (
                  <ButtonBase component={Link} to="/login">
                    Login
                  </ButtonBase>
                ),
              },
              {
                children: (
                  <ButtonBase component={Link} to="/signup">
                    Sign up
                  </ButtonBase>
                ),
              },
            ]}
          />
        </div>
      </StyledButtons>

      <Outlet />
    </StyledLayout>
  )
}
