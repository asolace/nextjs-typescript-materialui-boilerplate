import React from 'react';
import { Typography } from '@mui/material';

import { Main } from '@/layout/Main';
import { Meta } from '@/meta/Meta';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title='Saas Frontend Boilerplate Demo'
          description='Saas Frontend Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework.'
        />
      }>
      <Typography variant='h1' sx={{ mb: 3 }}>
        Home Page
      </Typography>
    </Main>
  );
};

export default Index;
