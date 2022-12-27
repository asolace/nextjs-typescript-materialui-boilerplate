import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { FormControlLabel } from '@mui/material';

import { ColorModeContext } from '@/pages/_app';
import ColorModeSwitchStyle from './ColorModeSwitchStyle';

const ColorModeSwitch = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isLightMode = theme.palette.mode === 'light';

  return (
    <FormControlLabel
      data-testid='color-mode-switch'
      control={<ColorModeSwitchStyle sx={{ m: 1 }} checked={isLightMode} />}
      onChange={colorMode.toggleColorMode}
      label={isLightMode ? 'Light Mode' : 'Dark Mode'}></FormControlLabel>
  );
};

export default ColorModeSwitch;
