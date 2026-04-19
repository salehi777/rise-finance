import Container from '@/components/ui/container'
import { StyledContent, StyledLayout } from './styled'
import { Button } from '@mui/material'
import { Link } from 'react-router'

export default function LandingNotFoundPage() {
  return (
    <StyledLayout>
      <Container>
        <StyledContent>
          <h1>404</h1>
          <div>Page not found</div>
          <Link to="/">
            <Button variant="contained">Back to Home</Button>
          </Link>
        </StyledContent>
      </Container>
    </StyledLayout>
  )
}
