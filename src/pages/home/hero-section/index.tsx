import Container from '@/components/ui/container'
import { StyledHero, StyledWrapper } from './styled'
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from '@/components/ui/image'
import GradientText from '@/components/ui/gradient-text'
import BigCard from './big-card'
import SmallCard from './small-card'

export default function HeroSection() {
  return (
    <StyledWrapper>
      <Container>
        <StyledHero>
          <div>
            <Typography variant="h1">
              <GradientText>Scale Fintech</GradientText>
              <div>Safe And Secure</div>
            </Typography>
            <Typography variant="h5" m="26px 0 38px">
              Ship your fintech products to your customers with fast and
              reliable processes. Secure and highly customizable. Rise Finance
              is the best partner for you if you want to scale your finance
              products worldwide.
            </Typography>
            <Button data-gradient>CONSULTATION</Button>
          </div>

          <div>
            <BigCard />
            <SmallCard />
          </div>
        </StyledHero>

        <Grid
          container
          textAlign="center"
          alignItems="center"
          spacing={4}
          sx={{ mt: { xs: 12, md: 0 }, mb: { xs: 8, md: 0 } }}
        >
          {[
            'logo-ipsum-1.png',
            'logo-ipsum-2.png',
            'logo-ipsum-3.png',
            'logo-ipsum-2.png',
          ].map((image, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
              <Image src={`/images/${image}`} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledWrapper>
  )
}
