import { styled } from "@mui/material";

export const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#cbcaef",
  borderRadius: 16,
  padding: "18px 18px",
  height: "100%",
  display: "flex",
  flexDirection: "column",

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
          ".icon": {
            width: 14,
            height: 14,
          },
        },
      },
    },
  },
}));

export const StyledGauge = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  "--length": "280px",
  "--offset": "50px",

  [theme.breakpoints.down("sm")]: {
    "--length": "200px",
    "--offset": "30px",
  },

  ">div": {
    position: "relative",
    height: "calc((var(--length) + var(--offset)) / 2)", // (length + offset) / 2
    ">svg": {
      "&:first-of-type": {
        width: "var(--length)", // length
      },
      "&:last-of-type": {
        width: "calc(var(--length) + var(--offset))", // length + offset
        position: "absolute",
        top: "calc(var(--offset) / -2)", // -offset / 2
        left: "calc(var(--offset) / -2)", // -offset / 2
        transform: "rotate(1deg)",
        circle: {
          stroke: "#999 !important",
        },
      },
    },

    ">div:first-of-type": {
      position: "absolute",
      left: `calc(50% - 12.5px)`,
      top: -30,
      ">span": {
        height: "calc((var(--length) + var(--offset)) / 2 + 5px)", // (length + offset) / 2 + 5
        position: "absolute",
        left: 0,
        top: 0,
        transformOrigin: "bottom center",
        "&:nth-of-type(1)": { transform: "rotate(-90deg)" },
        "&:nth-of-type(2)": { transform: "rotate(-45deg)" },
        "&:nth-of-type(3)": { transform: "rotate(0deg)" },
        "&:nth-of-type(4)": { transform: "rotate(45deg)" },
        "&:nth-of-type(5)": { transform: "rotate(90deg)" },
        span: {
          fontSize: 12,
          backgroundColor: "#cbcaef",
          width: 25,
          height: 25,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      [theme.breakpoints.down("sm")]: {
        left: `calc(50% - 10px)`,
        top: -23,
        ">span": {
          span: {
            width: 20,
            height: 20,
          },
        },
      },
    },

    ">div:last-of-type": {
      position: "absolute",
      left: "50%",
      top: "60%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      div: {
        fontSize: 30,
        fontWeight: 700,
      },
      span: {
        fontSize: 14,
        color: theme.palette.grey[500],
        marginTop: 4,
        display: "block",
      },
      [theme.breakpoints.down("sm")]: {
        div: {
          fontSize: 26,
        },
      },
    },
  },
}));

export const StyledCounts = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "12px auto 0",
  maxWidth: 350,
  ">div": {
    margin: "0 4px",
    div: {
      fontSize: 26,
      fontWeight: 700,
    },
    span: {
      fontSize: 14,
      color: theme.palette.grey[500],
      marginTop: 8,
      display: "block",
    },
    "&:nth-of-type(2)": {
      div: {
        color: theme.palette.success.main,
      },
    },
    "&:nth-of-type(3)": {
      div: {
        color: theme.palette.warning.main,
      },
    },
    "&:nth-of-type(4)": {
      div: {
        color: theme.palette.orange.main,
      },
    },
    [theme.breakpoints.down("sm")]: {
      div: {
        fontSize: 22,
      },
      span: {
        fontSize: 13,
      },
    },
  },
}));
