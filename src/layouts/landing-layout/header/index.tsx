import { StyledContent, StyledGithub, StyledHeader } from './styled'
import { Button, Drawer, IconButton, useMediaQuery } from '@mui/material'
import SvgBox from '@/components/ui/svg-box'
import { Link } from 'react-router'
import Container from '@/components/ui/container'
import Image from '@/components/ui/image'
import Navbar from './navbar'
import useAuthStore from '@/stores/useAuthStore'
import { useModal } from '@/hooks/useModal'

export default function Header() {
  const { isOpen, toggleModal: toggleDrawer } = useModal()
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'))
  const user = useAuthStore((state) => state.user)

  return (
    <>
      <StyledHeader>
        <Container>
          <StyledContent>
            {isMobile && (
              <IconButton
                onClick={() => toggleDrawer()}
                aria-label="Open Drawer"
              >
                <SvgBox src="/icons/menu.svg" />
              </IconButton>
            )}

            <Link to="/" aria-label="Bakc to Homepage">
              <Image
                src="/images/logo-text.svg"
                width={196}
                height={40}
                alt="Rise Finance"
              />
            </Link>

            {!isMobile && <Navbar />}

            <div>
              {user ? (
                <Link to="/dashboard">
                  <Button variant="contained">Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link to="/signup">
                    <Button variant="outlined">Signup</Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="contained">Login</Button>
                  </Link>
                </>
              )}
            </div>
          </StyledContent>
        </Container>
      </StyledHeader>

      <StyledGithub
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/salehi777/rise-finance"
      >
        <SvgBox src="/icons/github.svg" />
      </StyledGithub>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => toggleDrawer()}
        PaperProps={{ sx: { minWidth: 200 } }}
      >
        <div>drawer</div>
      </Drawer>
    </>
  )
}
