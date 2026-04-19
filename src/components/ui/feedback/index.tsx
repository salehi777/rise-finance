import { type BoxProps } from '@mui/material'
import { StyledFeedback } from './styles'

interface FeedbackProps extends BoxProps {
  loading?: boolean
  message?: string
  error?: boolean
  empty?: boolean
}

export default function Feedback({
  loading,
  message,
  error,
  empty,
  ...props
}: FeedbackProps) {
  return (
    <StyledFeedback data-error={error} {...props}>
      {loading
        ? null
        : message
          ? message
          : error
            ? 'Failed to show data'
            : empty
              ? 'No data to show'
              : null}
    </StyledFeedback>
  )
}
