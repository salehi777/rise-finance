import Container from '@/components/ui/container'
import { StyledBox, StyledChart, StyledHead } from './styled'
import { Box, ButtonBase, Typography } from '@mui/material'
import SvgBox from '@/components/ui/svg-box'
import Image from '@/components/ui/image'
import GradientText from '@/components/ui/gradient-text'

export default function ConsultingSection() {
  return (
    <Container>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <StyledHead>
          <Typography variant="h3">
            <GradientText>Consulting For Startups In Fintech</GradientText>
          </Typography>
          <Typography variant="h5">
            Our Team consists of proven experts from finance, tech and science.
            This mix makes it possible for our team to deliver the best results
            to all our clients.
          </Typography>
        </StyledHead>

        <StyledBox>
          <ButtonBase aria-label="Refresh">
            <SvgBox src="/icons/refresh.svg" component="img" alt="Refresh" />
          </ButtonBase>

          <div>
            <span>Growth report</span>
            <span>Annual Growth Of Our Customers</span>
            <div>1,000% in Value</div>
            <p>Success Rate</p>
            <div>
              <svg viewBox="0 0 10 10">
                <circle cx="5" cy="5" r="5" />
              </svg>
              <span>item</span>
              <svg viewBox="0 0 10 10">
                <circle cx="5" cy="5" r="5" />
              </svg>
              <span>item</span>
            </div>
          </div>

          <StyledChart>
            <span>
              <Image src="/images/chart-grid.png" alt="Chart Grid" />
            </span>
            <div>
              <Image src="/images/chart-item-1.png" alt="Chart Item 1" />
            </div>
            <div>
              <Image src="/images/chart-item-2.png" alt="Chart Item 2" />
            </div>
          </StyledChart>
        </StyledBox>
      </Box>
    </Container>
  )
}
