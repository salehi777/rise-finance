import {
  PaletteColor,
  SimplePaletteColorOptions,
  createTheme,
} from "@mui/material/styles";
import components from "./components";
import mixins from "./mixins";

let theme = createTheme();

theme = createTheme({
  palette: {
    common: {
      black: "#060606",
    },
    primary: {
      main: "#3A49F9",
    },
    secondary: {
      main: "#121139",
    },
    success: {
      main: "#1a932e",
    },
    error: {
      main: "#ee201c",
    },
    warning: {
      main: "#dfa510",
    },
    text: {
      primary: "#121139",
    },
    orange: theme.palette.augmentColor({
      color: {
        main: "#e65f2b",
      },
      name: "orange",
    }),
  },

  typography: {
    fontFamily: "'Poppins', sans-serif",
  },

  components,
  mixins,
});

export default theme;

declare module "@mui/material/styles" {
  interface Palette {
    orange: PaletteColor;
  }
  interface PaletteOptions {
    orange: SimplePaletteColorOptions;
  }
}
