import Container from '@/components/ui/container'
import { StyledHead, StyledInfo, StyledProcess, StyledWrapper } from './styled'
import { ButtonBase, Grid, Typography } from '@mui/material'
import SvgBox from '@/components/ui/svg-box'
import Image from '@/components/ui/image'
import GradientText from '@/components/ui/gradient-text'

export default function ProcessSection() {
  return (
    <StyledWrapper>
      <Container>
        <StyledHead>
          <Typography variant="h3">
            <GradientText>
              Delivering Value In Every Step Of Production
            </GradientText>
          </Typography>
        </StyledHead>

        <Grid
          container
          justifyContent="space-evenly"
          mb={{ xs: '100px', md: '195px' }}
        >
          <Grid size={{ xs: 12, md: 4.5, lg: 3.5, xl: 3 }}>
            <StyledInfo>
              <ButtonBase aria-label="Refresh">
                <SvgBox
                  src="/icons/refresh.svg"
                  component="img"
                  alt="Refresh"
                />
              </ButtonBase>

              <div>
                <span data-meta>Meta Info</span>
                <div data-bodytitle>This Is The Body Title</div>
                <div data-value>1,000 Value</div>
                <span data-subtitle>This Is A Subtitle</span>

                <div data-info>
                  <Image
                    src="/images/info.png"
                    width={194}
                    height={194}
                    alt="Info Graphic"
                  />
                  <div>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i}>
                        <svg viewBox="0 0 10 10">
                          <circle cx="5" cy="5" r="5" />
                        </svg>
                        <span>item</span>
                      </div>
                    ))}
                  </div>
                </div>

                <span data-meta>Meta Info</span>
                <div data-bodytitle>This Is The Body Title</div>
                <span data-subtitle>This Is A Subtitle</span>
              </div>
            </StyledInfo>
          </Grid>

          <Grid size={{ xs: 12, md: 6.5, lg: 7, xl: 6 }}>
            <StyledProcess>
              <span>The process</span>
              <Typography variant="h5">
                Strategic phrases we run through with every client make it
                possible to implement highly efficinet processes, even in high
                pace startups that like to scale as fast as possible.
              </Typography>
              <div>
                <div>
                  <SvgBox src="/icons/chart-growth.svg" />
                  <div>Analysis</div>
                  <GradientText>1</GradientText>
                </div>
                <div>
                  <SvgBox src="/icons/arrow-growth.svg" />
                  <div>Growth Phase</div>
                  <GradientText>2</GradientText>
                </div>
                <div>
                  <SvgBox src="/icons/money.svg" />
                  <div>Profit</div>
                  <GradientText>3</GradientText>
                </div>
              </div>
            </StyledProcess>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  )
}
