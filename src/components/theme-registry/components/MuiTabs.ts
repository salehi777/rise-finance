const MuiTabs = {
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: "unset",
        ".MuiTab-root": {
          padding: "10px 16px",
          textTransform: "none",
          minHeight: "unset",
          minWidth: "unset",
        },
      },
    },
  },

  MuiTabPanel: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
};

export default MuiTabs;
