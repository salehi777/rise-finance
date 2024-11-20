import { Popover, styled } from "@mui/material";

export const StyledPopover = styled(Popover)(({ theme }) => ({
  ".MuiPopover-paper": {
    borderRadius: 50,
    marginTop: 4,
    boxShadow: "none",
    minWidth: 200,

    ul: {
      display: "flex",
      flexDirection: "column",

      li: {
        ">div , >button": {
          padding: "11px 24px",
          display: "flex",
          width: "100%",
          fontSize: 14,
          justifyContent: "flex-start",
          transition: theme.transitions.create("all"),
          ">span:first-of-type": {
            display: "flex",
            marginRight: 12,
            ".icon": {
              width: 20,
              height: 20,
            },
          },
          ":hover": {
            backgroundColor: theme.palette.grey[100],
          },
        },
        ">button": {
          color: theme.palette.error.main,
        },
      },
    },
  },
}));
