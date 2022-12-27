import React from 'react';
import { Container, Typography } from '@mui/material';

import { Main } from '@/layout/Main';
import { Meta } from '@/meta/Meta';

const About = () => (
  <Main meta={<Meta title='Lorem ipsum' description='Lorem ipsum' />}>
    <Container maxWidth='lg'>
      <Typography variant='h1' sx={{ mb: 3 }}>
        About Us
      </Typography>

      <Typography variant='body1' sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at quam sagittis, tempor
        est a, maximus libero. Integer gravida felis ac metus mollis, eget maximus leo imperdiet.
        Mauris pretium vestibulum tortor non hendrerit. Sed egestas nisl id arcu rutrum, eu
        malesuada lectus venenatis. Sed luctus sapien libero, sit amet maximus sapien interdum nec.
        Donec nec semper lectus. Mauris vel urna convallis, pulvinar ligula ut, elementum diam.
        Phasellus scelerisque, ipsum id aliquam luctus, turpis nisi porttitor nisl, ac ultrices
        neque dolor id eros.
      </Typography>

      <Typography variant='body1' sx={{ mb: 2 }}>
        Suspendisse potenti. Quisque in placerat neque, vel tincidunt lorem. Nullam lobortis
        interdum fringilla. Praesent rhoncus arcu non elit blandit vestibulum. Nunc id felis id
        ipsum pellentesque lobortis. Sed aliquet lectus ac purus iaculis, lacinia porta sapien
        aliquam. Ut facilisis, sem eget aliquet suscipit, turpis augue semper mauris, vel maximus
        diam nibh non eros. Proin nulla nibh, dignissim at eros elementum, suscipit congue lacus.
      </Typography>
    </Container>
  </Main>
);

export default About;
