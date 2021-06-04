import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, cleanup } from '@testing-library/react';
import Header from '../Header';

const todo = {
  id: 1,
  name: 'buy bread',
  completed: false
};

afterEach(cleanup);

describe('todo test', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Header todo={todo} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show title', () => {
    render(<Header />);

    expect(screen.getByText("Todo App")).toBeInTheDocument();
  });
});
