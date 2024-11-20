import Container from "@/components/container";
import { StyledBox, StyledHead, StyledPhone, StyledWrapper } from "./styled";
import { Box, Button } from "@mui/material";
import Image from "next/image";

export default function CaseStudySection() {
  return (
    <StyledWrapper>
      <Container>
        <StyledHead>
          <div>case Study</div>
          <p>Some results from our clients</p>
        </StyledHead>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: { xs: "65px 0 100px", lg: "144px 0 272px" },
            flexDirection: { xs: "column", lg: "row" },
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
              <Button variant="outlined" size="large" color="secondary">
                read more about this client
              </Button>
            </div>
            <Image
              src="/image/logo-ipsum-1-big.png"
              width={100}
              height={393}
              alt="Ipsum Logo"
            />
          </StyledBox>

          <StyledPhone>
            <div>
              <Image src="/image/iPhone.png" fill alt="iPhone" />
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
  );
}
