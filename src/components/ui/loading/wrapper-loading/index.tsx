import { Backdrop } from '@mui/material'
import { StyledLoading } from './styles'
import DotsLoading1 from '../dots-loading-1'

interface WrapperLoadingProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
  loading: boolean
  label?: string
  customLoading?: React.ReactNode
}

export default function WrapperLoading({
  children,
  loading,
  label = 'Loading',
  customLoading,
  ...props
}: WrapperLoadingProps) {
  return (
    <StyledLoading {...props}>
      <Backdrop
        open={loading}
        role="status"
        aria-label={label}
        data-open={loading}
      >
        {loading && (
          <>
            {customLoading || <DotsLoading1 />}
            <span>{label}</span>
          </>
        )}
      </Backdrop>
      {children}
    </StyledLoading>
  )
}
