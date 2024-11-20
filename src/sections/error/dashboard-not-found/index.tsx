"use client";

import { StyledContent } from "./styled";
import { Button } from "@mui/material";
import Link from "next/link";

export default function DashboardNotFound() {
  return (
    <StyledContent>
      <h1>404</h1>
      <div>Page not found</div>
      <Link href="/dashboard">
        <Button variant="contained">Back to Dashboard</Button>
      </Link>
    </StyledContent>
  );
}
