import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('AppComponent')).toBeInTheDocument();
  const linkElement = screen.getByText(/learn reactttt/i);
  expect(linkElement).toBeInTheDocument();
});
