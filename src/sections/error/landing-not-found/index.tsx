"use client";

import Container from "@/components/container";
import { StyledContent, StyledLayout } from "./styled";
import { Button } from "@mui/material";
import Link from "next/link";

export default function LandingNotFound() {
  return (
    <StyledLayout>
      <Container>
        <StyledContent>
          <h1>404</h1>
          <div>Page not found</div>
          <Link href="/">
            <Button variant="contained">Back to Home</Button>
          </Link>
        </StyledContent>
      </Container>
    </StyledLayout>
  );
}
