import { Backdrop, Button, useMediaQuery } from '@mui/material'
import { StyledContent, StyledHead, StyledSidebar } from './styles'
import MotionIconRotate from '@/components/ui/motion-icon/motion-icon-rotate'
import useSettingsStore from '@/stores/useSettingsStore'

export default function Sidebar() {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const sidebar = useSettingsStore((s) => s.sidebar)
  const toggleSidebar = useSettingsStore((s) => s.toggleSidebar)

  return (
    <>
      <Backdrop
        open={sidebar && !isDesktop}
        onClick={() => toggleSidebar()}
        sx={{ zIndex: (theme) => theme.zIndex.appBar - 1 }}
      />
      <StyledSidebar data-open={sidebar}>
        <div>
          <Button onClick={toggleSidebar}>
            <MotionIconRotate
              srcs={['/icons/sidebar.svg', '/icons/close.svg']}
              index={Number(sidebar)}
            />
          </Button>
          <StyledHead></StyledHead>
          <StyledContent>
            <div>content</div>
          </StyledContent>
        </div>
      </StyledSidebar>
    </>
  )
}
