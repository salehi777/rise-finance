import { alpha, styled } from "@mui/material";

export const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#cbcaef",
  borderRadius: 16,
  padding: "18px 18px",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    padding: "12px 9px",
  },

  ">div:first-of-type": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 32,

    ">div": {
      display: "flex",
      alignItems: "center",
      ">div": {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 50,
        padding: "8px 12px",
        fontSize: 14,
        cursor: "pointer",
        margin: "0 4px",
        ">span:last-of-type": {
          display: "flex",
          marginLeft: 12,
          span: {
            width: 14,
            height: 14,
          },
        },
      },

      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        ">div": {
          marginTop: 6,
        },
      },
    },
  },
}));

export const StyledGrid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr minmax(140px,1fr) 100px 90px 75px",

  [theme.breakpoints.down("md")]: {
    maxWidth: `calc(${theme.mixins.dashboard.helpers.getMainContentWidthMobile()} - 16px - 18px )`,
    overflow: "auto",
  },

  ">strong": {
    borderBottom: "1px solid #9695a9",
    padding: "0 4px 8px",
  },

  ">div": {
    padding: "16px 4px",
    fontSize: 15,
    display: "flex",
    alignItems: "center",

    "&:nth-child(5n - 1)": {
      span: {
        borderRadius: 50,
        fontSize: 13,
        padding: "4px 8px",
        "&[data-status=completed]": {
          color: theme.palette.success.main,
          backgroundColor: alpha(theme.palette.success.main, 0.2),
        },
        "&[data-status=delayed]": {
          color: theme.palette.warning.main,
          backgroundColor: alpha(theme.palette.warning.main, 0.2),
        },
        "&[data-status=at_risk]": {
          color: theme.palette.error.main,
          backgroundColor: alpha(theme.palette.error.main, 0.2),
        },
        "&[data-status=on_going]": {
          color: theme.palette.orange.main,
          backgroundColor: alpha(theme.palette.orange.main, 0.2),
        },
      },
    },

    "&:nth-child(5n)": {
      position: "relative",
      svg: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 44,
        height: 44,
        ".rc-progress-circle-trail": {
          stroke: "#dfd7d3 !important",
        },
      },
      span: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 11,
        fontWeight: 600,
      },
    },
    "&[data-status=completed]": {
      ".rc-progress-circle-path": {
        stroke: `${theme.palette.success.main} !important`,
      },
    },
    "&[data-status=delayed]": {
      ".rc-progress-circle-path": {
        stroke: `${theme.palette.warning.main} !important`,
      },
    },
    "&[data-status=at_risk]": {
      ".rc-progress-circle-path": {
        stroke: `${theme.palette.error.main} !important`,
      },
    },
    "&[data-status=on_going]": {
      ".rc-progress-circle-path": {
        stroke: `${theme.palette.orange.main} !important`,
      },
    },
  },
}));
