import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

interface HeaderMediaLinksProps {
  pages: string[];
}

const HeaderMediaLinks = ({ pages }: HeaderMediaLinksProps) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleOpenNavMenu}
          color='inherit'>
          <MenuIcon />
        </IconButton>
        <Menu
          id='menu-appbar'
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}>
          {pages.map(page => (
            <Link key={page} href={`/${page}/`} passHref>
              <MenuItem key={page} role='listitem' onClick={handleCloseNavMenu}>
                <Typography textAlign='center'>{page}</Typography>
              </MenuItem>
            </Link>
          ))}
          <Link href='https://github.com/asolace/nextjs-typescript-materialui-boilerplate' passHref>
            <IconButton
              color='primary'
              aria-label='add to shopping cart'
              sx={{ width: '100%', '&:hover': { backgroundColor: 'unset' } }}>
              <GitHubIcon />
            </IconButton>
          </Link>
        </Menu>
      </Box>

      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

      <Typography
        variant='h5'
        noWrap
        component='a'
        href=''
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}>
        LOGO
      </Typography>
    </>
  );
};

export default HeaderMediaLinks;
