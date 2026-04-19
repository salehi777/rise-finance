import { Box, type BoxProps } from '@mui/material'

interface SvgBoxProps extends BoxProps {
  src: string
  alt?: string
}

export default function SvgBox({
  src,
  component,
  style,
  ...props
}: SvgBoxProps) {
  return (
    <Box
      component={component || 'span'}
      className="svg-box"
      {...(component === 'img' ? { src } : {})}
      style={{
        width: 24,
        height: 24,
        flexShrink: 0,
        display: 'inline-flex',
        ...(component !== 'img'
          ? {
              mask: `url(${src}) no-repeat center / contain`,
              WebkitMask: `url(${src}) no-repeat center / contain`,
              backgroundColor: 'currentColor',
            }
          : {}),
        ...style,
      }}
      {...props}
    />
  )
}
