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
  primary: { main: blue[400], ...blue },
  secondary,
  orange,
  success: {
    main: emerald[400],
    contrastText: '#000',
    ...emerald,
  },
  error: { main: red[400], ...red },
  warning: {
    main: amber[400],
    contrastText: '#000',
    ...amber,
  },
  info: { main: indigo[400], ...indigo },
  gray: {
    main: gray[500],
    contrastText: '#000',
    dark: gray[600],
    ...gray,
  },
  background: {
    default: gray['A100'],
    paper: gray[800],
  },
  text: {
    primary: gray[100],
    secondary: gray[400],
    disabled: gray[500],
  },
  divider: gray[700],
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
