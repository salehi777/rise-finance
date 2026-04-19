import { styled } from '@mui/material/styles'

export const StyledHeader = styled('header')(({ theme }) => ({
  height: theme.mixins.header.height,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  boxShadow: '0 -4px 8px 0px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 68px',
  transition: theme.transitions.create(['top', 'box-shadow']),
  background: theme.palette.background.paper,
  zIndex: theme.zIndex.appBar,

  '>a': { margin: '0 12px', img: { height: 70 } },

  '>ul': {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    gap: 12,

    a: {
      padding: '10px 16px',
      transition: theme.transitions.create('all'),
      borderBottom: '2px solid transparent',
      textTransform: 'capitalize',

      '&:hover, &.active': {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },

  '>div': {
    position: 'absolute',
    insetInlineEnd: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    '&[data-mode]': { top: 4 },
    '&[data-lang]': {
      top: 36,
      button: {
        minWidth: 'unset',
        width: 28,
        padding: '2px 6px',
        color: 'inherit',
      },
    },
  },

  '&[data-show="false"]': {
    top: -theme.mixins.header.height!,
    boxShadow: 'none',
  },
}))
