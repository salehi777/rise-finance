import { alpha, styled } from "@mui/material";

export const StyledRow = styled("div")(({ theme }) => ({
  margin: "18px 0 8px",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  rowGap: 12,
  columnGap: 12,
  alignItems: "center",

  ">div": {
    display: "contents",

    ">p": {
      fontSize: 15,
      display: "flex",
      alignItems: "center",
      ">span": {
        display: "inline-flex",
        marginRight: 10,
        ".icon": {
          width: 22,
          height: 22,
        },
      },
    },

    ">div": {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      div: {
        borderRadius: 50,
        fontSize: 13,
        padding: "4px 8px",
        "&[data-status=approved]": {
          color: theme.palette.success.main,
          backgroundColor: alpha(theme.palette.success.main, 0.2),
        },
        "&[data-status=in_review]": {
          color: theme.palette.error.main,
          backgroundColor: alpha(theme.palette.error.main, 0.2),
        },
        "&[data-status=on_going]": {
          color: theme.palette.orange.main,
          backgroundColor: alpha(theme.palette.orange.main, 0.2),
        },
      },
    },
  },

  [theme.breakpoints.down("sm")]: {
    display: "block",

    ">div": {
      display: "flex",
      flexDirection: "column",
      marginTop: 18,
      ">p": {
        alignItems: "flex-start",
      },
      ">div": {
        justifyContent: "flex-start",
        marginTop: 6,
      },
    },
  },
}));
