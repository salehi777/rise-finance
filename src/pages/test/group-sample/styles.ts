import { styled } from '@mui/material/styles'

export const StyledContentBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  color:
    theme.palette.mode === 'light'
      ? theme.palette.gray[600]
      : theme.palette.gray[300],

  '>div': {
    border: '1px solid',
    borderColor: theme.palette.gray[400],
    borderRadius: 4,
    padding: '6px 12px',
    fontSize: 15,
    lineHeight: 1,
  },
}))

export const StyledValue = styled('div')(({}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  '>div': { marginLeft: 30 },
  button: { minWidth: 'unset', width: 30, padding: '3px 0' },
}))
