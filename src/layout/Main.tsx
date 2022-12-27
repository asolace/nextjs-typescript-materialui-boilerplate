import React from 'react';
import type { ReactNode } from 'react';
import { Box } from '@mui/system';

import { Header } from './Header/Header';
import Footer from './Footer/Footer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <Box sx={{ height: '100vh' }}>
    {props.meta}
    <Header />

    {props.children}

    <Footer />
  </Box>
);

export { Main };
