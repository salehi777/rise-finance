import type { CSSObject, MixinsOptions } from '@mui/material/styles'
import { gray } from './colors'

const mixins: MixinsOptions = {
  scrollbar: {
    overflow: 'auto',
    '&::-webkit-scrollbar': { width: 7, height: 7 },
    '&::-webkit-scrollbar-track': { borderRadius: 10 },
    '&::-webkit-scrollbar-thumb': { background: gray[400], borderRadius: 10 },
    '&::-webkit-scrollbar-thumb:hover': { background: gray[500] },
  },

  landing: {
    header: { height: 75 },
    fullPage: {
      minHeight: 'calc(100vh - 75px)',
      '@supports (height: 100dvh)': { minHeight: 'calc(100dvh - 75px)' },
    },
  },

  dashboard: {
    header: { height: 90 },
    sidebar: { width_open: 260, width_close: 81 },
    main: {
      padding_desktop: `${90 + 24}px 32px 48px`,
      padding_mobile: `${90 + 12}px 12px 24px`,
    },
    // fullPage: {
    //   minHeight: `calc(100vh - 90px - 24px - 48px)`,
    //   '@supports (height: 100dvh)': {
    //     minHeight: `calc(100dvh - 90px - 24px - 48px)`,
    //   },
    //   '@media (max-width:899.9px)': {
    //     minHeight: `calc(100vh - 90px - 12px - 24px)`,
    //     '@supports (height: 100dvh)': {
    //       minHeight: `calc(100dvh - 90px - 12px - 24px)`,
    //     },
    //   },
    // },
  },
}

export default mixins

declare module '@mui/material/styles' {
  interface Mixins {
    scrollbar: CSSObject

    landing: {
      header: CSSObject
      fullPage: CSSObject
    }

    dashboard: {
      header: CSSObject
      sidebar: { width_open: number; width_close: number }
      main: { padding_desktop: string; padding_mobile: string }
      // fullPage: CSSObject
    }
  }
}
