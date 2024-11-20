import { styled } from "@mui/material";

export const StyledHead = styled("div")(({ theme }) => ({
  marginBottom: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  ">div": {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: "8px 12px",
    fontSize: 14,
    cursor: "pointer",
    ">span:last-of-type": {
      display: "flex",
      marginLeft: 12,
      ".icon": {
        width: 16,
        height: 16,
      },
    },
  },

  [theme.breakpoints.down("sm")]: {
    marginBottom: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    ">div": {
      marginTop: 8,
    },
  },
}));
