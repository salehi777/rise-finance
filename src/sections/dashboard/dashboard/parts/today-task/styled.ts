import { alpha, styled } from "@mui/material";

export const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#cbcaef",
  borderRadius: 16,
  padding: "18px 18px",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    padding: "12px 9px",
  },

  ">div:first-of-type": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
  },

  ".MuiTabs-root": {
    [theme.breakpoints.down("md")]: {
      maxWidth: `calc(${theme.mixins.dashboard.helpers.getMainContentWidthMobile()} - 16px - 18px )`,
    },
  },

  "[data-label]": {
    display: "flex",
    alignItems: "center",

    span: {
      width: 16,
      height: 16,
      display: "block",
      marginLeft: 4,
      fontSize: 12,
      borderRadius: 20,
      color: theme.palette.info.main,
      backgroundColor: alpha(theme.palette.info.main, 0.2),
    },
  },
}));
