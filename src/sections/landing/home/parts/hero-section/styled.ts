import AnimatedRect from "@/components/animated-rect";
import { styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#121139",
  minHeight: `calc(100vh - ${theme.mixins.landing.header.height}px)`,
  position: "relative",
  overflow: "hidden",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  ">div": {
    width: "100%",
  },
  "&::before , &::after": {
    content: '""',
    position: "absolute",
    borderRadius: 900,
    background:
      "linear-gradient(177deg, rgba(66, 62, 224, 0.40) -13.49%, rgba(129, 45, 226, 0.40) 109.75%)",
    filter: "blur(150px)",
  },
  "&::before": {
    width: "50%",
    height: "80%",
    left: "-25%",
    bottom: "-40%",
  },
  "&::after": {
    width: "30%",
    height: "50%",
    right: "-15%",
    top: "-25%",
  },

  [theme.breakpoints.down("md")]: {
    paddingTop: 32,
  },
}));

export const StyledLeft = styled("div")(({ theme }) => ({
  h1: {
    fontSize: 80,
    fontWeight: 600,
    lineHeight: "80px",
    "span:first-of-type": {
      display: "block",

      background: "linear-gradient(263deg, #9130F4 21.05%, #4646F9 77.63%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },

  p: {
    fontSize: 22,
    fontWeight: 500,
    lineHeight: "28px",
    margin: "26px 0 38px",
  },
  button: {
    textTransform: "uppercase",
  },

  [theme.breakpoints.down("xl")]: {
    h1: {
      fontSize: 70,
      lineHeight: "70px",
    },
    p: {
      fontSize: 20,
      lineHeight: "24px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    h1: {
      fontSize: 50,
      lineHeight: "50px",
    },
    p: {
      fontSize: 18,
      lineHeight: "22px",
    },
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

export const StyledRight = styled("div")(({ theme }) => ({
  position: "relative",
}));

export const StyledCardBig = styled(AnimatedRect)(({ theme }) => ({
  position: "relative",
  width: 609,
  height: 350,

  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    borderRadius: 30,
    background: "linear-gradient(177deg, #423EE0 -13.49%, #812DE2 109.75%)",
    filter: "blur(45px)",
  },

  ">div": {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: "47px 58px",
    ">div": {
      display: "flex",
      justifyContent: "space-between",
      ">div:first-of-type": {
        "span:first-of-type": {
          fontSize: 14,
          fontWeight: 500,
          opacity: 0.54,
          display: "block",
        },
        "span:last-of-type": {
          fontSize: 28,
          fontWeight: 500,
          display: "block",
          marginTop: 17,
        },
      },
      ">div:last-of-type": {
        position: "relative",
        width: 87,
        height: 68,
      },
    },
  },

  [theme.breakpoints.down("xl")]: {
    width: 609 * 0.8,
    height: 350 * 0.8,
  },
  [theme.breakpoints.down("lg")]: {
    width: 609 * 0.65,
    height: 350 * 0.65,
    ">div": {
      padding: "20px 20px",
      ">div": {
        ">div:first-of-type": {
          "span:first-of-type": {
            fontSize: 12,
          },
          "span:last-of-type": {
            fontSize: 24,
          },
        },
        ">div:last-of-type": {
          width: (50 * 87) / 68,
          height: 50,
        },
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: 609 * 0.5,
    height: 350 * 0.5,
  },
}));

export const StyledCardSmall = styled(AnimatedRect)(({ theme }) => ({
  position: "absolute",
  width: 214,
  height: 266,
  left: 609 - 214 + 43,
  bottom: -72,

  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    borderRadius: 30,
    background: "linear-gradient(177deg, #423EE0 -13.49%, #812DE2 109.75%)",
    filter: "blur(45px)",
  },

  ">div": {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "28px 25px 36px",
    fontWeight: 500,
    ">span:first-of-type": {
      marginBottom: "auto",
      position: "relative",
      width: 66,
      height: 40,
    },
    ">span:last-of-type": {
      fontSize: 12,
      opacity: 0.5,
    },
    ">div:first-of-type": {
      marginTop: 10,
      display: "flex",
      alignItems: "center",
      fontSize: 13,
      div: {
        marginRight: 12,
        span: {
          marginRight: 9,
          width: 6,
          height: 6,
          display: "inline-block",
          backgroundColor: "white",
          borderRadius: 6,
        },
      },
    },
    ">div:last-of-type": {
      marginTop: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      div: {
        position: "relative",
        width: 48,
        height: 32,
      },
      span: {
        fontSize: 11,
      },
    },
  },

  [theme.breakpoints.down("xl")]: {
    width: 214 * 0.8,
    height: 266 * 0.8,
    left: (609 - 214) * 0.8 + 43,
  },
  [theme.breakpoints.down("lg")]: {
    width: 214 * 0.65,
    height: 266 * 0.65,
    left: (609 - 214) * 0.65 + 20,
    bottom: -35,
    ">div": {
      padding: "16px 16px",
      ">span:first-of-type": {
        width: 66 * 0.75,
        height: 40 * 0.75,
      },
      ">span:last-of-type": {
        fontSize: 11,
      },
      ">div:first-of-type": {
        fontSize: 11,
        "span:first-of-type": {
          svg: {
            marginRight: 4,
            width: 5,
            height: 5,
          },
        },
      },
      ">div:last-of-type": {
        div: {
          width: 48 * 0.75,
          height: 32 * 0.75,
        },
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: 214 * 0.5,
    height: 266 * 0.5,
    left: (609 - 214) * 0.5 + 15,
    bottom: -45,
  },
}));
