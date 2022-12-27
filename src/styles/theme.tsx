import { PaletteMode, ThemeOptions } from '@mui/material';
import { deepPurple, red, grey } from '@mui/material/colors';
/**
 * Refer to https://mui.com/material-ui/customization/color/
 * for mui's color definitions.
 */

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: deepPurple,
          divider: deepPurple[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[700],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
    error: {
      main: red.A400,
    },
  },
});
