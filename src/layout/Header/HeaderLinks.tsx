import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

interface HeaderLinksProps {
  pages: string[];
}

const HeaderLinks = ({ pages }: HeaderLinksProps) => {
  return (
    <>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant='h6'
        noWrap
        component='a'
        href='/'
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}>
        LOGO
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map(page => (
          <Link key={page} role='listitem' href={`/${page}/`} passHref>
            <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
              {page}
            </Button>
          </Link>
        ))}
        <Link href='https://github.com/asolace/nextjs-typescript-materialui-boilerplate' passHref>
          <IconButton
            aria-label='github link'
            sx={{
              height: '100%',
              my: 'auto',
              color: 'white',
              display: 'block',
              '&:hover': { backgroundColor: 'unset' },
            }}>
            <GitHubIcon />
          </IconButton>
        </Link>
      </Box>
    </>
  );
};

export default HeaderLinks;
