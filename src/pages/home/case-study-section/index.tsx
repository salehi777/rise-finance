import Container from '@/components/ui/container'
import { StyledBox, StyledHead, StyledPhone, StyledWrapper } from './styled'
import { Box, Button, Typography } from '@mui/material'
import Image from '@/components/ui/image'
import GradientText from '@/components/ui/gradient-text'

export default function CaseStudySection() {
  return (
    <StyledWrapper>
      <Container>
        <StyledHead>
          <Typography variant="h3">
            <GradientText>Case Study</GradientText>
          </Typography>
          <Typography variant="h5">Some Results From Our Clients</Typography>
        </StyledHead>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            margin: { xs: '65px 0 100px', lg: '144px 0 272px' },
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          <StyledBox>
            <div>
              <span>Coruma Finance</span>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <Button data-gradient>READ MORE ABOUT THIS CLIENT</Button>
            </div>
            <Image
              src="/images/logo-ipsum-1-big.png"
              width={100}
              height={393}
              alt="Ipsum Logo"
            />
          </StyledBox>

          <StyledPhone>
            <div>
              <Image src="/images/iPhone.png" alt="iPhone" />
            </div>
            <div>
              <div>Accquired 8 long time customers</div>
              <div>300% Growth in first year</div>
              <div>hired 24 talented developers</div>
            </div>
          </StyledPhone>
        </Box>
      </Container>
    </StyledWrapper>
  )
}
