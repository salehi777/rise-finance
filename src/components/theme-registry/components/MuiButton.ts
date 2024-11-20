const MuiButton: any = {
  styleOverrides: {
    root: {
      textTransform: "none",

      "&.MuiButton-outlinedSecondary": {
        border: "4px solid",
        borderImageSlice: 1,
        borderImageSource: "linear-gradient(125deg, #812DE2, #3A49F9)",
        color: "#fff",
      },

      "&.MuiButton-sizeMedium": {
        padding: "10px 24px",
      },

      "&.MuiButton-sizeLarge": {
        padding: "16px 65px",
        fontSize: 18,

        ["@media (max-width:599.95px)"]: {
          padding: "10px 45px",
          fontSize: 16,
          lineHeight: "22px",
        },
      },
    },
  },
};

export default MuiButton;
