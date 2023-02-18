import { createTheme } from "@mui/material";

export const ThemePalette = createTheme({
  palette: {
    primary: {
      main: "#2759CD",
    },
    secondary: {
      main: "#304166",
      light: "#5e6c89",
      dark: "#212d47",
      contrastText: "#ffffff",
    },
    mtPrimary: {
      main: "#EE4932",
      dark: "#d50000",
      light: "#f96f5c",
      contrastText: "#ffffff",
    },
    mtSec: {
      main: "#BDD1FF",
    },
    mtGrey: {
      main: "#EFF5FC",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "0.9rem",
          textTransform: "capitalize",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});
