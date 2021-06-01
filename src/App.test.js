import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
test('renders h1 tag', () => {
  render(<App />);
  const title = screen.getByText(/todo app/i);
  expect(title).toBeInTheDocument();
});
