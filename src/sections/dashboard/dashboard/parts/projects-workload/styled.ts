import { styled } from "@mui/material";

export const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#cbcaef",
  borderRadius: 16,
  padding: "18px 18px",
  height: "100%",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("md")]: {
    padding: "12px 9px",
  },

  ">div:first-of-type": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,
    ">div": {
      display: "flex",
      alignItems: "center",
      ">div": {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: "8px 12px",
        fontSize: 14,
        cursor: "pointer",
        margin: "0 4px",
        ">span:last-of-type": {
          display: "flex",
          marginLeft: 12,
          ".icon": {
            width: 14,
            height: 14,
          },
        },
      },
    },
  },
}));

export const StyledWorks = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  margin: "auto 0",

  ">div": {
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",

    ">div:first-of-type": {
      fontSize: 14,
      color: theme.palette.grey[500],
      marginTop: 10,
    },

    ">div:last-of-type": {
      dislay: "flex",
      flexDirection: "column",
      span: {
        width: 30,
        height: 30,
        borderRadius: 30,
        border: `1px solid white`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14,
        "&:first-of-type": {
          backgroundColor: "white",
        },
        "&:not(:first-of-type)": {
          color: "transparent",
        },
      },

      "&[data-max=true]": {
        span: {
          "&:first-of-type": {
            backgroundColor: "#121139",
            borderColor: "#121139",
            color: "white",
          },
        },
      },
    },
  },
}));
