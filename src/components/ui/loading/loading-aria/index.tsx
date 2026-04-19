import { StyledLoading } from './styles'

export interface LoadingAriaProps extends React.ComponentProps<'div'> {
  label?: string
}

export default function LoadingAria({
  label = 'Loading',
  children,
  ...props
}: LoadingAriaProps) {
  return (
    <StyledLoading role="status" aria-label={label} {...props}>
      {children}
      <span>{label}</span>
    </StyledLoading>
  )
}
