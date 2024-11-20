import { styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    borderRadius: 900,
    background:
      "linear-gradient(177deg, rgba(66, 62, 224, 0.71) -13.49%, #4829A5 109.75%)",
    filter: "blur(400px)",
    width: "50%",
    height: "60%",
    right: "-25%",
    bottom: "-35%",
  },
}));

export const StyledHead = styled("div")(({ theme }) => ({
  marginTop: 80,
  div: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: 600,
    lineHeight: "100%",
    textTransform: "capitalize",
    background: "linear-gradient(263deg, #9130F4 21.05%, #4646F9 77.63%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  p: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: 500,
    lineHeight: "130%",
    margin: "40px auto 0",
  },
  [theme.breakpoints.down("md")]: {
    marginTop: 50,
    div: {
      fontSize: 32,
      lineHeight: "80%",
    },
    p: {
      fontSize: 17,
      lineHeight: "115%",
      margin: "30px auto 0",
    },
  },
}));

export const StyledBox = styled("div")(({ theme }) => ({
  minWidth: "59%",
  borderRadius: 30,
  background: "#15123E",
  padding: "200px 180px 220px 55px",
  color: "white",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    borderRadius: 900,
    background: "linear-gradient(177deg, #423EE0 -13.49%, #812DE2 109.75%)",
    filter: "blur(450px)",
    width: "60%",
    height: "110%",
    left: "-20%",
    bottom: "-30%",
  },

  ">div:first-of-type": {
    span: {
      fontSize: 30,
      fontWeight: 600,
      lineHeight: "100%",
      textTransform: "capitalize",
    },
    p: {
      margin: "60px 0",
      fontSize: 22,
      fontWeight: 500,
      lineHeight: "130%",
    },
    button: {
      textTransform: "uppercase",
    },
  },

  [theme.breakpoints.down("xl")]: {
    padding: "200px 110px 220px 55px",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "35px 40px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "35px 20px",
    ">div:first-of-type": {
      span: {
        fontSize: 22,
      },
      p: {
        margin: "30px 0",
        fontSize: 18,
        lineHeight: "115%",
      },
    },
  },
}));

export const StyledPhone = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  left: -170,
  ">div:first-of-type": {
    position: "relative",
    width: 327,
    height: 590,
    zIndex: 1,
  },
  ">div:last-of-type": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    ">div": {
      padding: "38px 0",
      textAlign: "center",
      borderRadius: 30,
      border: "2px solid #812DE2",
      background: "#1C1A50",
      color: "white",
      fontSize: 20,
      fontWeight: 500,
      lineHeight: "130%",
      position: "relative",
      left: -35,
      minWidth: 410,
    },
  },

  [theme.breakpoints.down("xl")]: {
    transform: "scale(.8)",
  },
  [theme.breakpoints.down("lg")]: {
    left: 0,
    transform: "scale(1)",
    marginTop: 30,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    ">div:last-of-type": {
      marginTop: 12,
      ">div": {
        margin: "4px 0",
        padding: "12px 12px",
        borderRadius: 15,
        fontSize: 16,
        lineHeight: "115%",
        left: 0,
        minWidth: "unset",
      },
    },
  },
}));
