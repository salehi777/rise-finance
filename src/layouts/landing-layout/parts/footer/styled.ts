import { styled } from "@mui/material";

export const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: "#121139",
  color: "white",
  padding: "131px 0",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    padding: "70px 0",
  },
}));

export const StyledLogo = styled("div")(({ theme }) => ({
  marginBottom: 31,
}));

export const StyledLinks = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flex: 1,
  ">div": {
    "&:not(:last-of-type)": {
      marginRight: 32,
      minWidth: 137,
    },
    span: {
      display: "block",
      fontSize: 18,
      fontWeight: 600,
      color: "#92989F",
      marginBottom: 8,
    },
    a: {
      display: "block",
      padding: "8px 0",
    },
  },
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
  [theme.breakpoints.down("sm")]: {
    ">div": {
      width: "50%",
      marginBottom: 15,
      "&:not(:last-of-type)": {
        marginRight: 0,
        minWidth: "unset",
      },
    },
  },
}));

export const StyledNewsLetter = styled("div")(({ theme }) => ({
  maxWidth: 400,
  div: {
    fontSize: 18,
    fontWeight: 600,
    color: "#92989F",
    marginBottom: 8,
  },
  [theme.breakpoints.down("lg")]: {
    marginTop: 20,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 20,
    maxWidth: "unset",
  },
}));

export const StyledCopyRight = styled("div")(({ theme }) => ({
  marginTop: 80,
  paddingTop: 31,
  borderTop: "1px solid #71777D",
  color: "#92989F",
  textAlign: "center",
  fontSize: 12,
  [theme.breakpoints.down("sm")]: {
    marginTop: 40,
  },
}));
