import React from 'react';
import '@testing-library/jest-dom';

import { render, screen, cleanup } from '@testing-library/react';
import TodoList from '../TodoList/TodoList';

const todos = [
  {
    id: "checkbox buy bread",
    note: 'buy bread',
    completed: false
  },
  {
    id: "checkbox buy milk",
    note: 'buy milk',
    completed: false
  },
  {
    id: "checkbox write blog",
    note: 'write blog',
    completed: false
  }
];

describe('todo list test', () => {
  afterEach(cleanup);
  it('matches snapshot', () => {
    const { asFragment } = render(<TodoList todos={todos} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should show name of todos', () => {
    render(<TodoList todos={todos} />);
    todos.forEach((d) => expect(screen.getByText(d.note)).toBeInTheDocument());
  });
});
