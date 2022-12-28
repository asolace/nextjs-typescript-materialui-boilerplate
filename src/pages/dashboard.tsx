import React from 'react';
import { Container, Typography } from '@mui/material';

import { Main } from '@/layout/Main';
import { Meta } from '@/meta/Meta';

const Dashboard = () => (
  <Main meta={<Meta title='Lorem ipsum' description='Lorem ipsum' />}>
    <Container maxWidth='lg'>
      <Typography variant='h1' sx={{ mb: 3 }}>
        Dashboard
      </Typography>

      <Typography variant='body1' sx={{ mb: 2 }}>
        This is a protected page. Only logged in users can access
      </Typography>
    </Container>
  </Main>
);

export default Dashboard;
