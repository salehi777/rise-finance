import { styled } from '@mui/material/styles'

export const StyledTable = styled('div')(({}) => ({
  display: 'grid',
  overflow: 'auto',
}))

export const StyledHead = styled('div')(({}) => ({
  display: 'contents',

  '>div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 8px',
    fontWeight: 700,
    minHieght: 50,
  },
}))

export const StyledRow = styled('div')(({}) => ({
  display: 'contents',

  '>div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 8px',
    minHeight: 70,
    borderTop: '1px solid #B9B9B9',
  },
}))

export const StyledFullRow = styled('div')(({ theme }) => ({
  gridColumn: '1 / -1',

  '.MuiCollapse-wrapperInner>div': {
    padding: '14px 20px 14px 12px',
    background:
      theme.palette.mode === 'light'
        ? theme.palette.gray[200]
        : theme.palette.gray[600],
    display: 'flex',
    alignItems: 'flex-start',
    gap: 12,
    boxShadow: 'inset 0 0 10px -5px #bbb',

    '>div:first-of-type': {
      width: 40,
      margin: '4px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      '.svg-box': { width: 18, height: 18 },
    },
  },
}))
