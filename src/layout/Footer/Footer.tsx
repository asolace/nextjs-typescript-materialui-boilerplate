import React from 'react';
import { Box } from '@mui/system';
import { Container, Grid } from '@mui/material';

import Copyright from '@/components/copyright/Copyright';
import ColumnLinks from './ColumnLinks';
import { ColumnLinksType } from './types';

const column1Links: ColumnLinksType[] = [
  { label: 'Example 1', href: '/' },
  { label: 'Example 2', href: '/' },
  { label: 'Example 3', href: '/' },
];
const column2Links: ColumnLinksType[] = [
  { label: 'About Us', href: '/about/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Terms of use', href: '/' },
  { label: 'Career', href: '/' },
];

const Footer = () => {
  return (
    <Box bgcolor='white' color='text.secondary' px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
      <Container maxWidth='xl'>
        <Grid container spacing={5}>
          <ColumnLinks title='Products' links={column1Links} />

          <ColumnLinks title='Company' links={column2Links} />

          <ColumnLinks title='Support' links={column1Links} />

          <ColumnLinks title='Social' links={column1Links} />
        </Grid>
      </Container>

      <Copyright />
    </Box>
  );
};

export default Footer;
