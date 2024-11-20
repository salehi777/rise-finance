import { alpha, styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  position: "relative",

  ">div": {
    display: "flex",
    position: "relative",
    ">div": {
      transition: theme.transitions.create("all"),
    },
  },

  ">span": {
    backgroundColor: alpha(theme.palette.primary.main, 1),
    display: "block",
    position: "absolute",
    bottom: 0,
    transition: theme.transitions.create("all"),
    height: "100%",
  },
}));
