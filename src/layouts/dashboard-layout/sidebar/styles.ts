import { styled } from '@mui/material/styles'

export const StyledSidebar = styled('div')(({ theme }) => ({
  minWidth: theme.mixins.dashboard.sidebar.width_close,
  transition: theme.transitions.create('min-width'),
  zIndex: theme.zIndex.appBar + 2,
  '>div': {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    width: theme.mixins.dashboard.sidebar.width_close,
    transition: theme.transitions.create('width'),
  },
  '&[data-open="true"]': {
    '>div': { width: theme.mixins.dashboard.sidebar.width_open },

    [theme.breakpoints.up('md')]: {
      minWidth: theme.mixins.dashboard.sidebar.width_open,
    },
  },
}))

export const StyledContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  backgroundColor: '#121139',
  color: 'white',
  height: '100%',
  ...theme.mixins.scrollbar,
  padding: '32px 16px',
  textWrap: 'nowrap',

  '>a:first-of-type': {
    display: 'flex',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 700,
    div: { marginRight: 8, position: 'relative', minWidth: 42, height: 42 },
    span: { display: 'none' },
  },

  '>a:last-of-type': {
    marginTop: 70,
    display: 'flex',
    alignItems: 'center',
    color: '#171717',
    padding: '12px 6px',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 48,
    height: 48,
    '>div': { display: 'inline-flex', marginRight: 0 },
    '>span:first-of-type': { display: 'none' },
  },

  ul: {
    marginTop: 60,
    a: {
      padding: '13px 16px',
      borderRadius: 50,
      marginBottom: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: theme.transitions.create('all'),
      color: 'inherit',
      width: 48,
      height: 48,
      '>span:first-of-type': {
        display: 'flex',
        marginRight: 0,
        '.svg-box': { width: 22, height: 22 },
      },
      '>span:last-of-type': { display: 'none' },

      '&.active': { color: '#121139', backgroundColor: '#fff' },
    },
  },

  '&[data-open="true"]': {
    padding: '32px 28px',

    '>a:first-of-type': {
      div: { minWidth: 52, height: 52 },
      span: { display: 'block' },
    },

    '>a:last-of-type': {
      width: 'unset',
      height: 'unset',
      '>div': { display: 'inline-flex', marginRight: 4 },
      '>span:first-of-type': { display: 'block' },
    },

    ul: {
      a: {
        justifyContent: 'flex-start',
        width: 'unset',
        height: 'unset',
        '>span:first-of-type': { marginRight: 16 },
        '>span:last-of-type': { display: 'block' },
      },
    },
  },
}))

export const StyledToggle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  height: 30,
  borderRadius: 30,
  backgroundColor: 'white',
  position: 'absolute',
  right: -15,
  top: 60,
  zIndex: theme.zIndex.drawer,
  cursor: 'pointer',
  transform: `rotate(-90deg)`,
  transition: theme.transitions.create('all'),
  color: 'black',
  '.svg-box': { width: 16, height: 16 },

  '&[data-open="true"]': { transform: `rotate(90deg)` },
}))
