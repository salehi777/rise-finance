const MuiTextField = {
  styleOverrides: {
    root: {
      width: "100%",
      ".MuiInputBase-root": {
        borderRadius: 8,
        "&.Mui-focused": {
          fieldset: {
            borderWidth: 1,
          },
        },
      },
    },
  },

  defaultProps: {
    InputLabelProps: {
      shrink: true,
    },
  },
};

export default MuiTextField;
