import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import Footer from '../Footer/Footer';

const todo = {
  id: 1,
  name: 'buy bread',
  completed: false
};

afterEach(cleanup);

describe('todo test', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show footer', () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
