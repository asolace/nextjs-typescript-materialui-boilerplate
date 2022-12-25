import React from 'react';
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
      <h1>Home Page</h1>
    </Main>
  );
};

export default Index;
