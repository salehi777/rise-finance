import { styled } from "@mui/material";

export const StyledHeader = styled(({ drawer, ...props }: any) => (
  <header {...props} />
))(({ theme, drawer }) => ({
  display: "flex",
  alignItems: "center",
  padding: "24px 32px",
  borderBottom: "1px solid #9695a9",
  position: "fixed",
  left:
    drawer === "open"
      ? theme.mixins.dashboard.sidebar.width_open
      : theme.mixins.dashboard.sidebar.width_close,

  transition: theme.transitions.create("left"),
  right: 0,
  height: theme.mixins.dashboard.header.height,
  backgroundColor: "#dfdfe5",
  zIndex: theme.zIndex.appBar,

  h1: {
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
      display: "none",
    },
  },

  ".MuiFormControl-root": {
    width: 330,
    ".MuiInputBase-root": {
      backgroundColor: "#fff",
      height: 42,
      borderRadius: 30,
      input: {
        color: "#000",
        fontSize: 14,
      },
      fieldset: {
        border: 0,
      },
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },

  ">div:last-of-type": {
    backgroundColor: "#fff",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    padding: 6,
    marginLeft: 16,
    height: 42,
    cursor: "pointer",

    ".MuiAvatar-root": {
      marginRight: 8,
      width: 32,
      height: 32,
    },

    ">div:last-of-type": {
      lineHeight: "18px",
      div: {
        fontSize: 14,
        fontWeight: 500,
      },
      span: {
        fontSize: 12,
        color: theme.palette.grey[500],
        textTransform: "capitalize",
      },
    },

    ">span": {
      margin: "0 12px 0 20px",
      ".icon": {
        width: 16,
        height: 16,
      },
    },
  },

  [theme.breakpoints.down("md")]: {
    left: theme.mixins.dashboard.sidebar.width_close,
    justifyContent: "flex-end",
    padding: "24px 12px",

    ">div:last-of-type": {
      marginLeft: 0,
    },
  },
}));
