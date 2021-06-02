import React from 'react';
import '@testing-library/jest-dom';

import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../Todo';

const todo = {
  id: 1,
  name: 'buy bread',
  completed: false
};

afterEach(cleanup);

describe('todo test', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Todo todo={todo} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should show name of todos', () => {
    render(<Todo todo={todo} />);

    expect(screen.getByText(todo.name)).toBeInTheDocument();
  });
});
