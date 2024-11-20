import { styled } from "@mui/material";

export const StyledHeader = styled("header")(({ theme }) => ({
  position: "fixed",
  left: 0,
  right: 0,
  height: theme.mixins.landing.header.height,
  zIndex: theme.zIndex.appBar,
  color: "#fff",
  backgroundColor: "#121139",

  ">div": {
    height: "100%",
  },
}));

export const StyledContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",

  ">a": {
    display: "flex",
    alignItems: "center",
    width: 196,
  },

  ">button": {
    color: "white",
    ".icon": {
      width: 32,
      height: 32,
    },
  },

  ">div": {
    width: 200,
    display: "flex",
    justifyContent: "center",
    a: {
      margin: "0 4px",
      ".MuiButton-outlined": {
        color: "white",
      },
    },
  },

  [theme.breakpoints.down("md")]: {
    ">a": {
      display: "none",
    },
    ">div": {
      marginLeft: "auto",
    },
  },
}));
