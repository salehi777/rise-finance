import { styled } from "@mui/material";

export const StyledCard = styled("div")(({ theme }) => ({
  backgroundColor: "#cbcaef",
  borderRadius: 16,
  padding: "18px 18px",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    padding: "12px 9px",
  },

  ">div:first-of-type": {
    borderRadius: 50,
    width: 46,
    height: 46,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },

  ">span": {
    marginTop: 20,
    display: "block",
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.grey[500],
  },

  ">div:last-of-type": {
    marginTop: 12,
    fontSize: 28,
    fontWeight: 600,
    "[data-small]": {
      fontSize: 18,
    },
  },

  ">p": {
    marginTop: 10,
    display: "flex",
    fontSize: 12,
    fontWeight: 500,
    ">span:first-of-type": {
      marginRight: 6,
      ".icon": {
        width: 16,
        height: 16,
      },
    },
  },
}));
