import Container from '@/components/ui/container'
import { StyledHead, StyledWrapper } from './styled'
import { Typography } from '@mui/material'
import GradientText from '@/components/ui/gradient-text'

export default function CorumaSection() {
  return (
    <StyledWrapper>
      <Container>
        <StyledHead>
          <Typography variant="h3">
            <GradientText>Coruma Finance</GradientText>
          </Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Typography>
        </StyledHead>
      </Container>
    </StyledWrapper>
  )
}
