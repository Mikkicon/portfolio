import React from 'react';
import { render } from '@testing-library/react';
import SocialMediaLinks from './components/SocialMediaLinks';

test('renders learn react link', () => {
  const { getByText } = render(<SocialMediaLinks />);
  const linkElement = getByText(/linkedin/i);
  expect(linkElement).toBeInTheDocument();
});
