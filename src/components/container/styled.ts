import { Box, styled } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  padding: "0 100px",
  maxWidth: "calc(1440px + 200px)",
  margin: "0 auto",

  [theme.breakpoints.down("xl")]: {
    padding: "0 40px",
  },

  [theme.breakpoints.down("lg")]: {
    padding: "0 20px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0 10px",
  },
}));
