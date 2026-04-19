import type { TypographyVariantsOptions } from '@mui/material/styles'

const fluidFontSize = (
  f: [number, number],
  w: [number, number] = [500, 1500],
) => {
  return `clamp(
  ${f[0]}px,
  calc(
    ${f[0]}px +
    (${f[1]}px - ${f[0]}px) *
    (
      (100vw - ${w[0]}px) /
      (${w[1]}px - ${w[0]}px)
    )
  ),
  ${f[1]}px)`
}

const typography: TypographyVariantsOptions = {
  fontFamily: "'Poppins', sans-serif",
  h1: { fontSize: fluidFontSize([50, 80]), fontWeight: 600 },
  h3: { fontSize: fluidFontSize([32, 50]), fontWeight: 600 },
  h5: { fontSize: fluidFontSize([18, 22]), fontWeight: 500 },
  h6: { fontSize: 18 },
}

export default typography
