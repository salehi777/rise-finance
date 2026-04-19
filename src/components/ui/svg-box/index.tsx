import { StyledSvgBox } from './styles'

export default function SvgBox({ src, component, style, ...props }: any) {
  return (
    <StyledSvgBox
      component={component || 'span'}
      className="svg-box"
      {...(component === 'img' ? { src } : {})}
      style={{
        ...(component !== 'img'
          ? {
              mask: `url(${src}) no-repeat center / contain`,
              WebkitMask: `url(${src}) no-repeat center / contain`,
            }
          : {}),
        ...style,
      }}
      {...props}
    />
  )
}
