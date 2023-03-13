import { createTheme } from "@mui/material";

export const ThemePalette = createTheme({
  palette: {
    primary: {
      main: "#2759CD",
    },
    secondary: {
      main: "#7286D3",
      // main: "#304166",
      light: "#5e6c89",
      dark: "#212d47",
      contrastText: "#ffffff",
    },
    mtPrimary: {
      main: "#FC2254",
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
  typography: {
    mtTitle: {
      fontFamily: "Pacifico",
      fontWeight: 500,
      fontSize: "1.35rem",
      lineHeight: " 1.6",
      letterSpacing: "0.0075em",
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
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          backgroundColor: "transparent",
        },
      },
    },
  },
});
