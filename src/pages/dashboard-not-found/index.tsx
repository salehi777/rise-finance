import { StyledContent } from './styled'
import { Button } from '@mui/material'
import { Link } from 'react-router'

export default function DashboardNotFoundPage() {
  return (
    <StyledContent>
      <h1>404</h1>
      <div>Page not found</div>
      <Link to="/dashboard">
        <Button variant="contained">Back to Dashboard</Button>
      </Link>
    </StyledContent>
  )
}
