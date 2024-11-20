import { styled } from "@mui/material";

export const StyledBox = styled(({ drawer, ...props }: any) => (
  <div {...props} />
))(({ theme, drawer }) => ({
  minWidth:
    drawer === "open"
      ? theme.mixins.dashboard.sidebar.width_open
      : theme.mixins.dashboard.sidebar.width_close,

  transition: theme.transitions.create("min-width"),
  [theme.breakpoints.down("md")]: {
    minWidth: theme.mixins.dashboard.sidebar.width_close,
  },
}));

export const StyledSidebar = styled(({ drawer, ...props }: any) => (
  <nav {...props} />
))(({ theme, drawer }) => ({
  width:
    drawer === "open"
      ? theme.mixins.dashboard.sidebar.width_open
      : theme.mixins.dashboard.sidebar.width_close,
  transition: theme.transitions.create("width"),
  padding: drawer === "open" ? "32px 28px" : "32px 18px",
  backgroundColor: "#121139",
  color: "#fff",
  position: "fixed",
  zIndex: theme.zIndex.drawer,
  top: 0,
  bottom: 0,
  textWrap: "nowrap",

  ">a:first-of-type": {
    display: "flex",
    alignItems: "center",
    fontSize: 24,
    fontWeight: 700,
    div: {
      marginRight: 8,
      position: "relative",
      minWidth: drawer === "open" ? 52 : 42,
      height: drawer === "open" ? 52 : 42,
    },
    span: {
      display: drawer === "open" ? "block" : "none",
    },
  },

  ">a:last-of-type": {
    marginTop: 70,
    display: "flex",
    alignItems: "center",
    color: "#171717",
    padding: "12px 6px",
    backgroundColor: "white",
    borderRadius: 50,
    width: drawer === "open" ? "" : 48,
    height: drawer === "open" ? "" : 48,
    ">div": {
      display: "inline-flex",
      marginRight: drawer === "open" ? 4 : 0,
    },
    ">span:first-of-type": {
      display: drawer === "open" ? "block" : "none",
    },
  },

  ul: {
    marginTop: 60,
    a: {
      padding: "13px 16px",
      borderRadius: 50,
      marginBottom: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: drawer === "open" ? "flex-start" : "center",
      transition: theme.transitions.create("all"),
      color: "inherit",
      width: drawer === "open" ? "unset" : 48,
      height: drawer === "open" ? "unset" : 48,
      ">span:first-of-type": {
        display: "flex",
        marginRight: drawer === "open" ? 16 : 0,
        ".icon": {
          width: 22,
          height: 22,
        },
      },
      ">span:last-of-type": {
        display: drawer === "open" ? "block" : "none",
      },

      "&[data-active=true]": {
        color: "#121139",
        backgroundColor: "#fff",
      },
    },
  },
}));

export const StyledArrow = styled(({ drawer, ...props }: any) => (
  <div {...props} />
))(({ theme, drawer }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 30,
  height: 30,
  borderRadius: 30,
  backgroundColor: "#fff",
  position: "absolute",
  right: -15,
  top: 60,
  zIndex: theme.zIndex.drawer,
  cursor: "pointer",
  transform: `rotate(${drawer === "open" ? 90 : -90}deg)`,
  transition: theme.transitions.create("all"),
  color: "black",
  ".icon": {
    width: 16,
    height: 16,
  },
}));
