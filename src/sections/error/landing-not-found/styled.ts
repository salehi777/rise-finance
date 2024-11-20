import { styled } from "@mui/material";

export const StyledLayout = styled("div")(({ theme }) => ({
  backgroundColor: "#121139",
  minHeight: `calc(100vh - ${theme.mixins.landing.header.height}px)`,
  position: "relative",
  overflow: "hidden",
  color: "white",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

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
}));

export const StyledContent = styled("div")(({ theme }) => ({
  textAlign: "center",

  h1: {
    fontSize: 130,
  },

  div: {
    fontSize: 22,
    marginTop: 24,
  },

  a: {
    display: "block",
    marginTop: 48,
  },
}));
