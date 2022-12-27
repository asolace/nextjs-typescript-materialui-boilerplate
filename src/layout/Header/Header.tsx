import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import ProfileMenu from './ProfileMenu';
import HeaderMediaLinks from './HeaderMediaLinks';
import HeaderLinks from './HeaderLinks';

const pages = ['about', 'blog'];

const Header = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <HeaderMediaLinks pages={pages} />

          <HeaderLinks pages={pages} />

          <ProfileMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
