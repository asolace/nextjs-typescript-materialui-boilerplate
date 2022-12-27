import React from 'react';
import { render, screen } from '@testing-library/react';

import Blog from '@/pages/blog/[slug]';

describe('Blog slug page', () => {
  describe('Render method', () => {
    it('should have one paragraphs of `Lorem ipsum`', () => {
      render(<Blog />);

      const paragraph = screen.getAllByText(/Lorem ipsum/);

      expect(paragraph).toHaveLength(1);
    });
  });
});
