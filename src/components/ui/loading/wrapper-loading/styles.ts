import { styled, alpha } from '@mui/material/styles'

export const StyledLoading = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 'inherit',

  '>.MuiBackdrop-root': {
    position: 'absolute',
    borderRadius: 'inherit',
    zIndex: 1,
    backgroundColor: alpha(theme.palette.text.disabled, 0.6),

    '.MuiCircularProgress-root': { color: theme.palette.text.secondary },

    '>span:last-of-type': {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0,
    },

    '&[data-open="true"] ~ *': { opacity: 0.6 },
  },
}))
