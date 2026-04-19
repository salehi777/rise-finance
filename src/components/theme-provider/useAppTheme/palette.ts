import type {
  Color,
  PaletteOptions,
  PaletteColorOptions,
  PaletteMode,
} from '@mui/material/styles'
import {
  blue,
  emerald,
  red,
  amber,
  indigo,
  gray,
  secondary,
  orange,
} from './colors'

const palette = (mode: PaletteMode): PaletteOptions => ({
  mode,
  primary: { main: blue[mode === 'light' ? 500 : 400], ...blue },
  secondary,
  orange,
  success: {
    main: emerald[mode === 'light' ? 500 : 400],
    contrastText: mode === 'light' ? '#fff' : '#000',
    ...emerald,
  },
  error: { main: red[mode === 'light' ? 500 : 400], ...red },
  warning: {
    main: amber[mode === 'light' ? 500 : 400],
    contrastText: mode === 'light' ? '#fff' : '#000',
    ...amber,
  },
  info: { main: indigo[mode === 'light' ? 500 : 400], ...indigo },
  gray: {
    main: gray[mode === 'light' ? 400 : 500],
    contrastText: mode === 'light' ? '#fff' : '#000',
    dark: gray[mode === 'light' ? 500 : 600],
    ...gray,
  },
  background: {
    default: gray[mode === 'light' ? 50 : 'A100'],
    paper: mode === 'light' ? '#fff' : gray[800],
  },
  text: {
    primary: gray[mode === 'light' ? 'A100' : 100],
    secondary: gray[mode === 'light' ? 500 : 400],
    disabled: gray[mode === 'light' ? 400 : 500],
  },
  divider: gray[mode === 'light' ? 300 : 700],
})

export default palette

type ColorPartial = Partial<Color>

declare module '@mui/material/styles' {
  interface Palette {
    gray: PaletteColorOptions & ColorPartial
    orange: PaletteColor
  }
  interface PaletteOptions {
    gray: PaletteColorOptions & ColorPartial
    orange: PaletteColor
  }

  interface PaletteColor extends ColorPartial {}
}

declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    gray: true
  }
}

// | Element                  | Light Mode Color | Dark Mode Color | Typical Gray (Light → Dark)     | Notes / Why this pair works well |
// |--------------------------|------------------|------------------|--------------------------------|----------------------------------|
// | **Page background**      | Very light gray  | Very dark gray   | 50 → 900              | Clean base vs deep, eye-friendly dark |
// | **Card / surface bg**    | White-ish        | Dark gray        | #fff → 800          | Elevated feel in light, subtle contrast in dark |
// | **Disabled bg**          | Light gray       | Medium-dark gray | 200 → 700             | Clearly disabled without being too harsh |
// | **Primary text**         | Near-black       | Near-white       | 900 → 100             | Highest readability in each mode |
// | **Secondary text**       | Medium gray      | Light-medium gray| 500 → 400             | Good hierarchy, reduced emphasis |
// | **Disabled text**        | Muted gray       | Muted light gray | 400 → 500             | Looks "faded" in both themes |
// | **Placeholder text**     | Same as disabled | Same as disabled | 400 → 500             | Consistent hint/empty-state style |
// | **Borders / dividers**   | Light border     | Dark border      | 300 → 700             | Visible separation without visual noise |
