import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#CAEBF2',
    },
    secondary: {
      main: '#f2d1ca',
    },
    error: {
      main: '#FF3B3F',
    },
    warning: {
      main: '#ebf2ca',
    },
    info: {
      main: '#cad7f2',
    },
    success: {
      main: '#caf2e5',
    },
  },
});
