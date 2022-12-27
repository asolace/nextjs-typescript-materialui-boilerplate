import React from 'react';
import { render, screen } from '@testing-library/react';

import About from '@/pages/about';

describe('About page', () => {
  describe('Render method', () => {
    it('should have two paragraphs of `Lorem ipsum`', () => {
      render(<About />);

      const paragraph1 = screen.getAllByText(/Lorem ipsum/);
      const paragraph2 = screen.getAllByText(/Suspendisse potenti/);

      expect(paragraph1).toHaveLength(1);
      expect(paragraph2).toHaveLength(1);
    });
  });
});
