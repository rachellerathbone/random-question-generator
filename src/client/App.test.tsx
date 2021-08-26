import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('Renders app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('React Question Generator');
  expect(linkElement).toBeInTheDocument();
});
