import { Skeleton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledSkeleton = styled(Skeleton)(({}) => ({
  borderRadius: 4,
  height: '100%',
  padding: '8px 36px',
  width: 130,
}))

export const StyledTab = styled('div')(({ theme }) => ({
  borderRadius: 4,
  color: theme.palette.text.secondary,
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.gray[200]
      : theme.palette.gray[700],
  transition: theme.transitions.create('color'),
  fontWeight: 700,
  fontSize: 14,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 36px',
  userSelect: 'none',

  '&[data-tab-selected=true]': {
    color:
      theme.palette.mode === 'light'
        ? theme.palette.gray[50]
        : theme.palette.gray[700],
  },

  '>*': { zIndex: 1 },
}))

export const StyledIndicator = styled('div')(({ theme }) => ({
  position: 'absolute',
  backgroundColor: theme.palette.primary.main,
  borderRadius: 4,
  transition: theme.transitions.create(['left', 'top', 'width']),
}))
