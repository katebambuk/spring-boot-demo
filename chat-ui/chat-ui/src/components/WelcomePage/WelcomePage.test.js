import React from 'react';
import { render } from '@testing-library/react';
import WelcomePage from './WelcomePage';

test('renders learn react link', () => {
  const { getByText } = render(<WelcomePage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
