import Link from "next/link";
import {
  StyledCopyRight,
  StyledFooter,
  StyledLinks,
  StyledLogo,
  StyledNewsLetter,
} from "./styled";
import Container from "@/components/container";
import { Box } from "@mui/material";
import data from "./data";
import Image from "next/image";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <StyledLogo>
          <Link href="/" aria-label="Bakc to Homepage">
            <Image
              src="/image/logo-text.svg"
              width={196}
              height={40}
              alt="Rise Finance"
            />
          </Link>
        </StyledLogo>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          <StyledLinks>
            {data.map(({ title, list }) => (
              <div key={title}>
                <span>{title}</span>
                {list.map(({ label, path }) => (
                  <Link key={label} href={path}>
                    {label}
                  </Link>
                ))}
              </div>
            ))}
            <div />
          </StyledLinks>

          <StyledNewsLetter>
            <div>Subcribe to our newsletter</div>
            <p>
              Funding freemium long tail hypotheses first mover advantage assets
              ownership
            </p>
          </StyledNewsLetter>
        </Box>

        <StyledCopyRight>
          Design with love © TanahAirStudio 2020. All right reserved
        </StyledCopyRight>
      </Container>
    </StyledFooter>
  );
}
