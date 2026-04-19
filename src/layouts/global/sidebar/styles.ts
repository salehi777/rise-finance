import { styled } from '@mui/material/styles'

export const StyledSidebar = styled('div')(({ theme }) => ({
  minWidth: 0,
  transition: theme.transitions.create('min-width'),
  zIndex: theme.zIndex.appBar - 1,
  '>div': {
    position: 'fixed',
    top: theme.mixins.header.height,
    bottom: 0,
    right: -(theme.mixins.sidebar.width as number),
    width: theme.mixins.sidebar.width,
    background: theme.palette.background.paper,
    boxShadow: 'none',
    transition: theme.transitions.create(['right', 'box-shadow']),
    '>button': {
      position: 'absolute',
      left: 0,
      top: 4,
      transform: 'translateX(-100%)',
      minWidth: 'unset',
      padding: '3px 7px',
      borderRadius: '4px 0 0 4px',
      border: '1px solid',
      borderRight: 'none',
      background: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      borderColor: 'currentColor',
    },
  },
  '&[data-open="true"]': {
    '>div': { right: 0, boxShadow: '4px 0 8px 0px' },
  },

  [theme.breakpoints.up('md')]: {
    '&[data-open="true"]': {
      minWidth: theme.mixins.sidebar.width,
    },
  },
}))

export const StyledHead = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '16px 12px 16px 16px',
  fontWeight: 500,
  fontSize: 20,
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
}))

export const StyledContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: '16px 12px 16px 16px',
  height: '100%',
  ...theme.mixins.scrollbar,
}))
