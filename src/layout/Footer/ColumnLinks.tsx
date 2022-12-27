import React from 'react';
import Link from 'next/link';
import { Box, Grid, Typography } from '@mui/material';

import { ColumnLinksType } from './types';

interface ColumnLinksProps {
  title: string;
  links: ColumnLinksType[];
}

const ColumnLinks = ({ title, links }: ColumnLinksProps) => {
  return (
    <Grid item xs={12} sm={3}>
      <Typography variant='h6' sx={{ mb: 2 }}>
        {title}
      </Typography>

      {links.map((link, i) => (
        <Box key={`${link.label}-${i}`} mt={1}>
          <Link href={link.href}>{link.label}</Link>
        </Box>
      ))}
    </Grid>
  );
};

export default ColumnLinks;
