const MuiSkeleton: any = {
  styleOverrides: {
    root: {
      "&.MuiSkeleton-rounded": {
        borderRadius: 16,
      },
    },
  },

  defaultProps: {
    variant: "rounded",
  },
};

export default MuiSkeleton;
