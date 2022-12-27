import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Index from '../pages/index';

describe('Index', () => {
  describe('Render index', () => {
    it('should have Main component', () => {
      render(<Index />);

      const menuItemList = screen.getAllByRole('listitem');

      expect(menuItemList).toHaveLength(2);
    });

    it('should have a link to support asolace.me', () => {
      render(<Index />);

      const copyrightSection = screen.getByText(/© Copyright/);
      const copyrightLink = within(copyrightSection).getByRole('link');

      /*
       * PLEASE READ THIS SECTION
       * We'll really appreciate if you could have a link to our website
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * Thank you for your support it'll mean a lot for us.
       */
      expect(copyrightLink).toHaveAttribute('href', 'https://asolace.me/');
    });
  });
});
