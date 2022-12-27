import React from 'react';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Container, Typography } from '@mui/material';

import { Main } from '@/layout/Main';
import { Meta } from '@/meta/Meta';

type IBlogUrl = {
  slug?: string;
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  return {
    paths: [...Array(10)].map((_, index) => ({
      params: { slug: `blog-${index}` },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({ params }) => {
  const slug = params?.slug;

  return {
    props: {
      slug,
    },
  };
};

const Blog = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main meta={<Meta title={props?.slug || 'no-slug'} description='Lorem ipsum' />}>
      <Container maxWidth='lg'>
        <Typography variant='h1' sx={{ mb: 3 }}>
          {props.slug}
        </Typography>

        <Typography variant='body1' sx={{ mb: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non consectetur tellus, sed
          venenatis mi. Quisque lacus sapien, scelerisque sagittis aliquam nec, faucibus eget dolor.
          In vitae dolor eros. Phasellus eros est, fermentum et arcu quis, dapibus sodales enim.
          Phasellus laoreet libero lacinia libero molestie ullamcorper et sit amet risus. Donec
          pretium arcu sed tellus commodo sodales. Etiam ac blandit arcu, a iaculis ante. Vivamus
          mauris turpis, placerat in elementum pulvinar, cursus at ipsum. Curabitur nec tellus
          auctor, tristique felis dapibus, accumsan massa. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Maecenas sed ornare metus, dictum
          molestie nisi. Nulla rutrum eleifend magna sit amet finibus. Sed pulvinar consequat massa,
          in cursus diam lobortis eget. Aenean auctor sagittis massa, vel imperdiet velit sodales
          quis. Integer urna arcu, fermentum quis neque et, blandit euismod diam.
        </Typography>

        <Typography variant='body1' sx={{ mb: 2 }}>
          Nullam non finibus dolor, nec egestas metus. Nullam rhoncus vehicula velit tincidunt
          convallis. Morbi luctus nisi non turpis semper feugiat. Morbi imperdiet libero eu sapien
          tincidunt, eu ornare est euismod. Sed eget tempor est. Maecenas condimentum pharetra ante
          sed dignissim. Morbi hendrerit euismod nisl, non lobortis enim sodales ut. Curabitur
          eleifend aliquet urna id molestie. Integer diam turpis, facilisis eu diam ut, ornare
          sodales dolor. Vestibulum ac facilisis massa. Fusce eget mollis mi, sed sodales nibh. In
          vitae lectus in massa faucibus varius.
        </Typography>

        <Typography variant='body1' sx={{ mb: 2 }}>
          Nullam rhoncus semper felis, sit amet volutpat ex laoreet et. Nam commodo arcu tortor, a
          eleifend nibh rhoncus quis. Nam sapien elit, imperdiet nec feugiat sit amet, placerat ac
          mauris. Ut tincidunt, massa sit amet rhoncus consequat, tortor mi finibus ipsum, non
          efficitur erat mi imperdiet diam. Vestibulum quis ipsum eu arcu sagittis finibus. Aliquam
          vehicula metus at sem rhoncus, et vulputate eros sagittis. Integer aliquam vel velit quis
          venenatis. Cras in risus ligula. Curabitur at orci et felis ultricies vehicula vitae quis
          mi. Aenean libero tellus, dictum a consectetur non, euismod eu nisi. Sed quis dapibus
          nunc. Etiam dignissim sem ante, ac pellentesque nisl consequat elementum.
        </Typography>

        <Typography variant='body1' sx={{ mb: 2 }}>
          Fusce quis ipsum quis velit pulvinar ultricies sed et ligula. Ut congue erat quis erat
          scelerisque, ut rutrum quam blandit. Curabitur sed egestas purus. Nullam nec tellus
          volutpat, luctus nulla at, rutrum elit. Integer ultricies odio odio, ut blandit felis
          fringilla vel. Maecenas vestibulum molestie sapien. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Suspendisse mi augue, blandit ac
          neque a, blandit elementum turpis. Ut posuere, odio in lobortis mattis, purus tellus
          aliquam elit, et blandit ipsum mauris imperdiet sapien. Cras mauris ipsum, convallis in
          finibus in, luctus non leo. Proin consequat est nulla, sit amet molestie nisi lobortis id.
          Praesent ullamcorper ligula vitae aliquam elementum.
        </Typography>

        <Typography variant='body1' sx={{ mb: 2 }}>
          Integer faucibus purus sem, fermentum fermentum tortor malesuada eu. Aliquam egestas
          lectus sed nulla molestie, eu lacinia enim vehicula. Duis pretium massa commodo ex posuere
          interdum. Nam blandit, elit vitae venenatis auctor, justo dolor porta massa, ut semper
          massa tortor quis sapien. Quisque ac est dignissim, lacinia massa vel, posuere ex. Quisque
          lacinia dolor maximus felis feugiat, vitae auctor erat ullamcorper. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
        </Typography>
      </Container>
    </Main>
  );
};

export default Blog;
