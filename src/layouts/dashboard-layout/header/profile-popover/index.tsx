import { ButtonBase } from '@mui/material'
import { StyledPopover } from './styled'
import SvgBox from '@/components/ui/svg-box'
import useAuthStore from '@/stores/useAuthStore'

interface ProfilePopoverProps {
  anchorEl: HTMLDivElement | null
  handleClose: () => void
}

export default function ProfilePopover({
  anchorEl,
  handleClose,
}: ProfilePopoverProps) {
  const logout = useAuthStore((state) => state.logout)

  return (
    <StyledPopover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      disableScrollLock
    >
      <ul>
        <li>
          <ButtonBase onClick={() => logout()}>
            <span>
              <SvgBox src="/icons/logout.svg" />
            </span>
            <span>Logout</span>
          </ButtonBase>
        </li>
      </ul>
    </StyledPopover>
  )
}
