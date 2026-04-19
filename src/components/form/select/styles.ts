import { Autocomplete } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledAutocomplete = styled(Autocomplete)(({}) => ({
  'input[readonly]': {
    cursor: 'pointer',
  },

  '.MuiInputBase-root': {
    padding: '0 !important',
    paddingInlineEnd: '9px !important',
    '.MuiInputAdornment-positionEnd': {
      color: 'inherit',
      marginLeft: 'unset',
      marginInlineStart: 8,
      '.MuiAutocomplete-clearIndicator , .MuiAutocomplete-popupIndicator': {
        visibility: 'visible',
        padding: 4,
      },
    },
  },
}))

export const sxPaper = () => ({
  ul: {
    padding: 0,
    '.MuiAutocomplete-option': {
      wordBreak: 'break-word',
      overflowWrap: 'break-word',
    },
  },
})
