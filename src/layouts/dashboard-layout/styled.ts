import { styled } from "@mui/material";

export const StyledLayout = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100%",
  backgroundColor: "#dfdfe5",

  ">div:last-of-type": {
    flex: 1,
    main: {
      width: "100%",
      height: "100%",
      padding: theme.mixins.dashboard.main.padding_desktop,

      [theme.breakpoints.down("md")]: {
        padding: theme.mixins.dashboard.main.padding_mobile,
      },
    },
  },
}));
