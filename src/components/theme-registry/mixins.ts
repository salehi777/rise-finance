const mixins = {
  landing: {
    header: {
      height: 75,
    },
  },
  dashboard: {
    sidebar: {
      width_open: 260,
      width_close: 81,
    },
    header: {
      height: 90,
    },
    main: {
      padding_desktop: `${90 + 24}px 32px 24px 32px`,
      padding_mobile: `${90 + 12}px 12px 12px`,
    },
    helpers: {
      getOutsideWidthMobile: () => 81 + 12 * 2,
      getMainContentWidthMobile: () => "calc(100vw - 81px - 24px)",
    },
  },
};

export default mixins;

declare module "@mui/material/styles" {
  interface Mixins {
    landing: {
      header: {
        height: number;
      };
    };
    dashboard: {
      sidebar: {
        width_open: number;
        width_close: number;
      };
      header: {
        height: number;
      };
      main: {
        padding_desktop: string;
        padding_mobile: string;
      };
      helpers: {
        getOutsideWidthMobile: () => number;
        getMainContentWidthMobile: () => string;
      };
    };
  }
}
