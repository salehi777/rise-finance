import { styled } from "@mui/material";

export const StyledWrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#121139",
  position: "relative",
  overflow: "hidden",
  color: "#fff",
  "&::before , &::after": {
    content: '""',
    position: "absolute",
    borderRadius: 900,
    background:
      "linear-gradient(177deg, rgba(66, 62, 224, 0.40) -13.49%, rgba(129, 45, 226, 0.40) 109.75%)",
    filter: "blur(150px)",
  },
  "&::before": {
    width: "80%",
    height: "110%",
    left: "-30%",
    bottom: "-20%",
  },
  "&::after": {
    width: "50%",
    height: "100%",
    right: "-25%",
    top: "-50%",
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
    maxWidth: 911,
  },
}));
