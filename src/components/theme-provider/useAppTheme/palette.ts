import type {
  Color,
  PaletteOptions,
  PaletteColorOptions,
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

const palette: PaletteOptions = {
  primary: { main: blue[500], ...blue },
  secondary,
  orange,
  success: {
    main: emerald[500],
    contrastText: '#fff',
    ...emerald,
  },
  error: { main: red[500], ...red },
  warning: {
    main: amber[500],
    contrastText: '#fff',
    ...amber,
  },
  info: { main: indigo[500], ...indigo },
  gray: {
    main: gray[400],
    contrastText: '#fff',
    dark: gray[500],
    ...gray,
  },
  background: {
    default: gray[50],
    paper: '#fff',
  },
  text: {
    primary: gray['A100'],
    secondary: gray[500],
    disabled: gray[400],
  },
  divider: gray[300],
}

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
