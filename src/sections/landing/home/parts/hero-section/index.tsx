import Container from "@/components/container";
import {
  StyledCardBig,
  StyledCardSmall,
  StyledLeft,
  StyledRight,
  StyledWrapper,
} from "./styled";
import { Button, Grid } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <StyledWrapper>
      <Container>
        <Grid container alignItems="center" rowSpacing={6} columnSpacing={4}>
          <Grid item xs={12} md={5.5} xl={6}>
            <StyledLeft>
              <h1>
                <span>Scale Fintech</span>
                <span>Safe And Secure</span>
              </h1>
              <p>
                Ship your fintech products to your customers with fast and
                reliable processes. Secure and highly customizable. Rise Finance
                is the best partner for you if you want to scale your finance
                products worldwide.
              </p>
              <Button variant="outlined" size="large" color="secondary">
                consultation
              </Button>
            </StyledLeft>
          </Grid>

          <Grid
            item
            xs={12}
            md={6.5}
            xl={6}
            display="flex"
            justifyContent="center"
          >
            <StyledRight>
              <StyledCardBig ratio={10}>
                <Image
                  src="/image/card-big.png"
                  fill
                  alt="Mastercard"
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority
                />
                <div>
                  <div>
                    <div>
                      <span>Current Balance</span>
                      <span>$5,750,20</span>
                    </div>
                    <div>
                      <Image
                        src="/image/mastercard-logo.png"
                        fill
                        alt="Mastercard Logo"
                        quality={100}
                      />
                    </div>
                  </div>
                  <span>5282 3456 7890 1289</span>
                </div>
              </StyledCardBig>

              <StyledCardSmall>
                <Image
                  src="/image/card-small.png"
                  fill
                  alt="Mastercard"
                  sizes="(max-width: 900px) 50vw, 25vw"
                  priority
                />
                <div>
                  <span>
                    <Image
                      src="/image/mastercard-logo-2.png"
                      fill
                      alt="Mastercard Logo"
                      quality={100}
                    />
                  </span>
                  <span>Credit Card</span>
                  <div>
                    <div>
                      {[1, 2, 3, 4].map((i) => (
                        <span key={i} />
                      ))}
                    </div>
                    <span>1289</span>
                  </div>
                  <div>
                    <div>
                      <Image src="/image/chip.png" fill alt="Mastercard Logo" />
                    </div>
                    <span>09/25</span>
                  </div>
                </div>
              </StyledCardSmall>
            </StyledRight>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ mt: { xs: 12, md: 0 }, mb: { xs: 8, md: 0 } }}>
        <Grid container textAlign="center" alignItems="center" spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Image
              src="/image/logo-ipsum-1.png"
              width={236}
              height={60}
              alt="Ipsum Logo"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Image
              src="/image/logo-ipsum-2.png"
              width={100}
              height={51}
              alt="Ipsum Logo"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Image
              src="/image/logo-ipsum-3.png"
              width={119}
              height={30}
              alt="Ipsum Logo"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Image
              src="/image/logo-ipsum-2.png"
              width={100}
              height={51}
              alt="Ipsum Logo"
            />
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
}
