import { styled } from "@mui/material";

export const StyledLayout = styled("div")(({ theme }) => ({
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",

  main: {
    flex: 1,
    paddingTop: theme.mixins.landing.header.height,
  },
}));
