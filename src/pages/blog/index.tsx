import React from 'react';
import Link from 'next/link';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Main } from '@/layout/Main';
import { Meta } from '@/meta/Meta';

const Blog = () => (
  <Main meta={<Meta title='Lorem ipsum' description='Lorem ipsum' />}>
    <Container maxWidth='lg'>
      <Typography variant='h1' sx={{ mb: 3 }}>
        Blog
      </Typography>

      <Typography variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod consequat urna a
        maximus. Ut posuere pulvinar felis euismod facilisis. Curabitur feugiat mi ut porttitor
        gravida. Maecenas luctus posuere sem sed euismod. Vestibulum laoreet vel urna at fringilla.
        Vestibulum interdum justo eu dictum viverra. Etiam arcu libero, porttitor non ornare sit
        amet, congue vel dui. Sed et laoreet magna. Curabitur vel nisl ornare, bibendum mauris ut,
        tincidunt nisi. Maecenas euismod ipsum id lorem scelerisque, vitae fringilla lacus
        dignissim. Aenean sed eros vitae ex molestie faucibus eu ut orci. Ut nulla neque, tristique
        ut risus ut, hendrerit accumsan augue. Sed condimentum imperdiet ex, et lacinia nisi
        tincidunt aliquet. Nullam laoreet non lorem sed fringilla. Morbi sollicitudin congue nunc
        non hendrerit. Morbi condimentum quam et blandit elementum.
      </Typography>

      {[...Array(10)].map((_, index) => (
        <Box key={index}>
          <Link href={`/blog/blog-${index}`}>{`Blog - ${index}`}</Link>
        </Box>
      ))}
    </Container>
  </Main>
);

export default Blog;
