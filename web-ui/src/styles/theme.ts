import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import { PaletteMode } from "@mui/material"

// declare module "@mui/material/styles" {
//   interface Palette {
//     info: Palette["info"]
//   }
//   interface PaletteOptions {
//     info?: PaletteOptions["info"]
//   }
// }

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#CAEBF2",
      },
      secondary: {
        main: "#f2d1ca",
      },
      error: {
        main: "#FF3B3F",
      },
      warning: {
        main: "#ebf2ca",
      },
      info: {
        main: "#cad7f2",
      },
      success: {
        main: "#caf2e5",
      },
    },
    // components: {
    //   MuiLink: {
    //     styleOverrides: {
    //       root: {
    //         color: "#f2d1ca",
    //         "&:hover": {
    //           color: "#cad7f2",
    //         },
    //       },
    //     },
    //   },
    // },
  })

export const responsiveTheme = (mode: PaletteMode) =>
  responsiveFontSizes(getTheme(mode))
