import Container from '@/components/ui/container'
import { StyledHead, StyledInfo, StyledProcess, StyledWrapper } from './styled'
import { ButtonBase, Grid } from '@mui/material'
import SvgBox from '@/components/ui/svg-box'
import Image from '@/components/ui/image'

export default function ProcessSection() {
  return (
    <StyledWrapper>
      <Container>
        <StyledHead>Delivering value in every step of production</StyledHead>

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
                <div data-bodytitle>This is the body title</div>
                <div data-value>1,000 Value</div>
                <span data-subtitle>This is a subtitle</span>

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
                <div data-bodytitle>This is the body title</div>
                <span data-subtitle>This is a subtitle</span>
              </div>
            </StyledInfo>
          </Grid>

          <Grid size={{ xs: 12, md: 6.5, lg: 7, xl: 6 }}>
            <StyledProcess>
              <span>The process</span>
              <p>
                Strategic phrases we run through with every client make it
                possible to implement highly efficinet processes, even in high
                pace startups that like to scale as fast as possible.
              </p>
              <div>
                <div>
                  <SvgBox src="/icons/chart-growth.svg" />
                  <div>Analysis</div>
                  <div>1</div>
                </div>
                <div>
                  <SvgBox src="/icons/arrow-growth.svg" />
                  <div>Growth Phase</div>
                  <div>2</div>
                </div>
                <div>
                  <SvgBox src="/icons/money.svg" />
                  <div>Profit</div>
                  <div>3</div>
                </div>
              </div>
            </StyledProcess>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  )
}
