import SvgBox from '@/components/ui/svg-box'
import { Avatar, TextField } from '@mui/material'
import { StyledHeader } from './styled'
import { useState } from 'react'
import ProfilePopover from './profile-popover'
import useAuthStore from '@/stores/useAuthStore'
import useSettingsStore from '@/stores/useSettingsStore'

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const handleOpen = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const user = useAuthStore((state) => state.user)
  const sidebar = useSettingsStore((state) => state.sidebar)

  return (
    <>
      <StyledHeader data-sidebar={sidebar}>
        <h1>Dashboard</h1>

        <TextField placeholder="Search for anything..." />

        <div onClick={handleOpen}>
          <Avatar src="/" />
          <div>
            <div>{user?.full_name}</div>
            <span>{user?.job_title?.replace('_', ' ')}</span>
          </div>
          <span>
            <SvgBox src="/icons/arrow-down.svg" />
          </span>
        </div>
      </StyledHeader>

      <ProfilePopover anchorEl={anchorEl} handleClose={handleClose} />
    </>
  )
}
