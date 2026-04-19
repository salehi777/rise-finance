import { GlobalStyles } from '@mui/material'

export default function AppGlobalStyles() {
  return (
    <GlobalStyles
      styles={{
        a: { color: 'inherit', textDecoration: 'none' },
        ul: { margin: 0, padding: 0, listStyleType: 'none', display: 'block' },
        p: { margin: 0 },
        img: { display: 'block', maxWidth: '100%' },
        input: { WebkitTapHighlightColor: 'transparent' },
        'input::-webkit-outer-spin-button,input::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        '#nprogress .bar': { height: 4, backgroundColor: '#121139' },
        '#nprogress .peg': { boxShadow: '0 0 10px #121139,0 0 5px #121139' },
      }}
    />
  )
}
