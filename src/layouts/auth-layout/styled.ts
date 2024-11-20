import { styled } from "@mui/material";

export const StyledLayout = styled("div")(({ theme }) => ({
  backgroundColor: "#121139",
  minHeight: `calc(100vh - ${theme.mixins.landing.header.height}px)`,
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

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

export const StyledButtons = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: 24,

  ">div": {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",

    a: {
      display: "block",
      padding: "12px 30px",
    },
  },
}));
