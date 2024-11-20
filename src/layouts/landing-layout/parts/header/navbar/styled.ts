import { styled } from "@mui/material";
import { INITIAL_HEIGHT } from "./nav-item";

export const StyledNavbar = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flex: 1,
  height: "100%",

  ul: {
    display: "flex",
    willChange: "contents",
    width: "fit-content",
    alignItems: "flex-start",
    padding: "0 10px",

    a: {
      display: "block",
      marginTop: (theme.mixins.landing.header.height - INITIAL_HEIGHT) / 2,
      ">div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 25px",
        margin: "0 10px",
        fontWeight: 500,
        borderBottom: "4px solid #2a2951",
        transition: theme.transitions.create("border-color"),
      },

      "&[data-active=true]": {
        ">div": {
          borderColor: "#6e6c97",
        },
      },
    },
  },

  [theme.breakpoints.down("lg")]: {
    ul: {
      a: {
        ">div": {
          padding: "0 15px",
          margin: "0 5px",
        },
      },
    },
  },
}));
