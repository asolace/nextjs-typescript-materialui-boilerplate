import React from 'react';
import { Box } from '@mui/material';

import { AppConfig } from '@/AppConfig';

const Copyright = () => (
  <Box
    textAlign='center'
    pt={{ xs: 5, sm: 10 }}
    pb={{ xs: 4, sm: 0 }}
    aria-label='asolace copyright'>
    © Copyright {new Date().getFullYear()} {AppConfig.title}.
    <br />
    Built with{' '}
    <span role='img' aria-label='Love'>
      ♥
    </span>{' '}
    by <a href='https://asolace.me/'>Asolace</a> | Jack He.
  </Box>
);

export default Copyright;
