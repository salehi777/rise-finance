import Container from "@/components/container";
import { StyledBox, StyledChart, StyledHead } from "./styled";
import { Box, ButtonBase } from "@mui/material";
import Icon from "@/components/icon";
import Image from "next/image";

export default function ConsultingSection() {
  return (
    <Container>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <StyledHead>
          <div>consulting for startups in fintech</div>
          <p>
            Our Team consists of proven experts from finance, tech and science.
            This mix makes it possible for our team to deliver the best results
            to all our clients.
          </p>
        </StyledHead>

        <StyledBox>
          <ButtonBase aria-label="Refresh">
            <Icon src="/icon/refresh.svg" component="img" alt="Refresh" />
          </ButtonBase>

          <div>
            <span>Growth report</span>
            <span>annual growth of our customers</span>
            <div>1,000% in Value</div>
            <p>Success rate</p>
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
              <Image src="/image/chart-grid.png" fill alt="Chart Grid" />
            </span>
            <div>
              <Image src="/image/chart-item-1.png" fill alt="Chart Item 1" />
            </div>
            <div>
              <Image src="/image/chart-item-2.png" fill alt="Chart Item 2" />
            </div>
          </StyledChart>
        </StyledBox>
      </Box>
    </Container>
  );
}
